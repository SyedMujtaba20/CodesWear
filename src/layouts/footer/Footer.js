import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © 2024{" "}
        <Link href={`${process.env.NEXT_PUBLIC_HOST}`}>
          <b>Codeswear</b>
        </Link>{" "}
        | All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
