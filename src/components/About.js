import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import kingImg from "../images/king.png";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 1, sm: 10 },
        px: { xs: "6%", sm: "10%" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid
        container
        spacing={5}
        alignItems="center"
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        {/* LEFT TEXT SECTION */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "26px", sm: "36px", md: "42px" },
              fontWeight: 700,
            }}
          >
            About <span style={{ color: "#0ef" }}>Me</span>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              my: 2,
              color: "#fff",
              fontSize: { xs: "18px", sm: "22px" },
              fontWeight: { xs: 500, sm: 600 },
            }}
          >
            React.Js Developer!
          </Typography>

          <Typography
            sx={{
              mb: 4,
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              lineHeight: { xs: "22px", sm: "26px" },
              color: "aliceblue",
            }}
          >
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
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "14px", sm: "16px" },
              boxShadow: "0 0 25px #0ef",
              "&:hover": { boxShadow: "0 0 50px cyan" },
            }}
          >
            More About Me
          </Button>
        </Grid>

        {/* RIGHT IMAGE SECTION */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={kingImg}
            alt="Profile"
            sx={{
              width: { xs: "60%", sm: "70%", md: "75%" },
              margin: "0 auto",
              borderRadius: "80px",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
