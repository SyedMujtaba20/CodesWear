import React from "react";
import { Typography, Box, Container } from "@mui/material";

const About = () => {
  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: " #ff347f",
            textAlign: "center",
          }}
        >
          About Codeswear
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, textAlign: "justify" }}>
          At Codeswear, we believe that clothing is more than just
          fabric—it&apos;s a statement, a reflection of your personality, and a
          representation of your love for coding and tech culture. Founded with
          the mission to create apparel that resonates with coders, designers,
          and tech enthusiasts, Codeswear combines high-quality materials with
          creative designs inspired by the tech world.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: " #ff347f" }}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: "justify" }}>
            Our mission is to provide stylish, comfortable, and high-quality
            apparel that tech enthusiasts can wear proudly. Whether you’re a
            programmer, designer, or just someone who loves tech, our
            collections are designed to celebrate your passion and keep you
            comfortable while doing what you love.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: " #ff347f" }}
          >
            Why Choose Codeswear?
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: "justify" }}>
            At Codeswear, we take pride in delivering more than just a product.
            We offer an experience of quality, comfort, and connection to the
            tech world. With unique designs, premium materials, and an emphasis
            on sustainability, Codeswear stands out as the go-to brand for
            tech-inspired apparel.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: " #ff347f" }}
          >
            Join the Codeswear Community
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: "justify" }}>
            Join our growing community of tech enthusiasts who wear Codeswear
            not just because it looks good, but because it speaks to their
            identity. Follow us on social media, and don&apos;t forget to tag us
            when you wear your Codeswear!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
