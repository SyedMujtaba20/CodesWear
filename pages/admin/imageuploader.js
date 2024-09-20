import React, { useState } from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import mongoose from "mongoose";
import Product from "@/models/Product";
import {
  Grid,
  ImageList,
  ImageListItem,
  Modal,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { ImCross } from "react-icons/im"; // Import ImCross from react-icons

// Function to generate srcSet for responsive images
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageUploader = ({ products = [] }) => {
  // State to manage the modal open/close and the currently selected image
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Handle opening the modal with a specific image
  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  // Handle closing the modal
  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  // Ensure products is an array
  const productArray = Array.isArray(products) ? products : [];

  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <BaseCard title="Upload an Image">
              <ImageList
                sx={{ height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
              >
                {productArray.length > 0 ? (
                  productArray.map((product) => (
                    <ImageListItem
                      key={product._id} // Ensure _id is available
                      cols={1}
                      rows={1}
                      onClick={() => handleOpen(product.img)} // Open modal on image click
                    >
                      <img
                        {...srcset(product.img, 121, 1, 1)}
                        alt={product.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))
                ) : (
                  <ImageListItem cols={4}>
                    <Typography>No products available</Typography>
                  </ImageListItem>
                )}
              </ImageList>
            </BaseCard>
          </Grid>
        </Grid>

        {/* Modal for displaying the larger image */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "grey.500",
              }}
            >
              <ImCross size={24} /> {/* Use ImCross from react-icons */}
            </IconButton>
            <img
              src={selectedImage}
              alt="Large preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Modal>
      </FullLayout>
    </ThemeProvider>
  );
};

export default ImageUploader;

export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
