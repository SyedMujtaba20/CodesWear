import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";

const AllProducts = ({ products = [] }) => {
  useEffect(() => {}, [products]);

  return (
    <BaseCard title="All Products">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
          tableLayout: "fixed", // Makes sure the columns have fixed width
          width: "100%",
          overflowX: "auto", // Allows horizontal scrolling if content overflows
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Slug
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Image
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Size/Color
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Price
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length > 0 ? (
            products.map((product) => (
              <TableRow key={product.slug}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      whiteSpace: "nowrap", // Prevent wrapping of title
                    }}
                    noWrap
                  >
                    {product.title}
                  </Typography>
                </TableCell>
                {/* Slug */}
                <TableCell
                  sx={{
                    maxWidth: "150px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600" }}
                        noWrap
                      >
                        {product.slug}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                {/* Image */}
                <TableCell sx={{ maxWidth: "80px" }}>
                  <img
                    style={{
                      height: "42px",
                      width: "42px",
                      objectFit: "cover",
                      margin: "0 auto",
                    }}
                    src={product.img}
                    alt={product.title}
                  />
                </TableCell>
                {/* Size/Color */}
                <TableCell sx={{ maxWidth: "120px" }}>
                  <Typography color="textSecondary" variant="h6">
                    {Array.isArray(product.size)
                      ? product.size.join(", ")
                      : product.size}
                    /
                    {Array.isArray(product.color)
                      ? product.color.join(", ")
                      : product.color}
                  </Typography>
                </TableCell>
                {/* Price */}
                <TableCell align="right">
                  <Typography>Rs. {product.price}</Typography>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>
                <Typography>No products available</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default AllProducts;
