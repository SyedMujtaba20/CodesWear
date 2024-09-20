import React, { useState } from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import {
  Grid,
  Stack,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    size: "",
    color: "",
    slug: "",
    desc: "",
    category: "",
    availableQty: "",
    img: "",
    price: "", // Added price field
  });
  const [errors, setErrors] = useState({});

  const categories = ["tshirt", "sticker", "hoody", "mug"];

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = "Title is required";
    if (!form.slug) newErrors.slug = "Slug is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.availableQty || isNaN(form.availableQty))
      newErrors.availableQty = "Available Quantity must be a number";
    if (!form.price || isNaN(form.price) || parseFloat(form.price) <= 0)
      newErrors.price = "Price must be a positive number"; // Price validation
    if (!form.img) newErrors.img = "Image URL is required";
    return newErrors;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch("/api/addproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([form]),
      });

      if (response.ok) {
        alert("Product added successfully!");
        setForm({
          title: "",
          size: "",
          color: "",
          slug: "",
          desc: "",
          category: "",
          availableQty: "",
          img: "",
          price: "", // Reset price field
        });
        setErrors({});
      } else {
        const result = await response.json();
        alert("Failed to add product: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      alert("An error occurred while adding the product.");
    }
  };

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
            <BaseCard title="Add a Product">
              <Stack spacing={3} component="form" onSubmit={submitForm}>
                <TextField
                  onChange={onChange}
                  value={form.title}
                  name="title"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  error={!!errors.title}
                  helperText={errors.title}
                />
                <TextField
                  onChange={onChange}
                  value={form.size}
                  name="size"
                  label="Size"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  onChange={onChange}
                  value={form.color}
                  name="color"
                  label="Color"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  onChange={onChange}
                  value={form.slug}
                  name="slug"
                  label="Slug"
                  variant="outlined"
                  fullWidth
                  error={!!errors.slug}
                  helperText={errors.slug}
                />
                <TextField
                  onChange={onChange}
                  value={form.desc}
                  name="desc"
                  label="Description"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
                <FormControl fullWidth error={!!errors.category}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={form.category}
                    name="category"
                    onChange={onChange}
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{errors.category}</FormHelperText>
                </FormControl>
                <TextField
                  onChange={onChange}
                  value={form.availableQty}
                  name="availableQty"
                  label="Available Quantity"
                  type="number"
                  variant="outlined"
                  fullWidth
                  error={!!errors.availableQty}
                  helperText={errors.availableQty}
                />
                <TextField
                  onChange={onChange}
                  value={form.price}
                  name="price"
                  label="Price"
                  type="number"
                  variant="outlined"
                  fullWidth
                  error={!!errors.price}
                  helperText={errors.price}
                />
                <TextField
                  onChange={onChange}
                  value={form.img}
                  name="img"
                  label="Image URL"
                  variant="outlined"
                  fullWidth
                  error={!!errors.img}
                  helperText={errors.img}
                />
                <Button type="submit" variant="contained" mt={2}>
                  Submit
                </Button>
              </Stack>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default AddProduct;
