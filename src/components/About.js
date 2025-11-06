import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import kingImg from "../images/king.png";

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, px: "10%" }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box component="img" src={kingImg} alt="Profile" sx={{ width: "75%", borderRadius: "80px" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">About <span style={{ color: "#0ef" }}>Me</span></Typography>
          <Typography variant="h5" sx={{ my: 2, color: "#fff" }}>Full Stack Developer!</Typography>
          <Typography sx={{ mb: 4, fontSize: "18px", color: "aliceblue" }}>
            I'm Srikanth Kumar Maturu from Nellore, Andhra Pradesh. I graduated from RSR College in
            Electronics and Communication and completed Java, SQL, and Full Stack courses at IIHT TechAcademy.
            My goal is to build a successful career as a Full Stack Developer and continue lifelong learning.
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
