import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          py: 3,
          mt: 10,
          backgroundColor: "rgb(7, 85, 91)",
          px: 2
        }}
      >
        <Typography>Designed and Developed by Srikanth Kumar Maturu</Typography>
      </Box>

      <IconButton
        href="#home"
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          backgroundColor: "#0ef",
          color: "#000",
          "&:hover": { backgroundColor: "#00ffff" },
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </>
  );
};

export default Footer;
