import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import kingImg from "../images/king.png";

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, px: "10%" }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={kingImg}
            alt="Profile"
            sx={{ width: "75%", borderRadius: "80px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">
            About <span style={{ color: "#0ef" }}>Me</span>
          </Typography>
          <Typography variant="h5" sx={{ my: 2, color: "#fff" }}>
            React.Js Developer!
          </Typography>
          <Typography sx={{ mb: 4, fontSize: "18px", color: "aliceblue" }}>
            Full Stack Developer with 1 year of experience in creating scalable
            web applications using the MERN Stack (MongoDB, Express.js,
            React.js, Node.js). Skilled in agile development and cloud
            deployment, with a focus on delivering user-centric software
            solutions. Proven ability to collaborate effectively in team
            environments to solve complex problems.
          </Typography>
          <Button
            variant="contained"
            href="#contact"
            sx={{
              backgroundColor: "#0ef",
              color: "#081b29",
              borderRadius: "40px",
              px: 4,
              py: 1.5,
              boxShadow: "0 0 25px #0ef",
              "&:hover": { boxShadow: "0 0 50px cyan" },
            }}
          >
            More About Me
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
