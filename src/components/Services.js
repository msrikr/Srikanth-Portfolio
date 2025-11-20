import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MemoryIcon from "@mui/icons-material/Memory";

const Services = () => {
  const services = [
    { icon: <CodeIcon sx={{ fontSize: 50 }} />, title: "React.Js Developer" },
    {
      icon: (
        <IntegrationInstructionsIcon sx={{ fontSize: 50, color: "#00eeff" }} />
      ),
      title: "MERN Stack Developer",
    },
    // {
    //   icon: <MemoryIcon sx={{ fontSize: 50, color: "#00eeff" }} />,
    //   title: "React Developer",
    // },
  ];

  return (
    <Box
  id="services"
  sx={{
    py: { xs: 6, sm: 10 },
    px: { xs: "6%", sm: "10%" },
    textAlign: "center",
  }}
>
  <Typography
    variant="h3"
    sx={{
      fontSize: { xs: "26px", sm: "36px", md: "42px" },
      fontWeight: 700,
    }}
  >
    My <span style={{ color: "#0ef" }}>Projects</span>
  </Typography>

  <Grid
    container
    spacing={{ xs: 3, sm: 4 }}
    sx={{ mt: { xs: 3, sm: 5 } }}
  >
    {services.map((s, i) => (
      <Grid item xs={12} md={6} key={i}>
        <Paper
          sx={{
            p: { xs: 3, sm: 4 },
            backgroundColor: "transparent",
            color: "aliceblue",
            borderRadius: 4,
            boxShadow: "1px 1px 40px #0053b8f7",
            transition: ".5s",
            "&:hover": {
              transform: "translateY(-10px)",
            },
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "40px", sm: "55px" }, // icon scaling
              color: "#0ef",
              mb: 2,
            }}
          >
            {s.icon}
          </Box>

          <Typography
            variant="h5"
            sx={{
              my: 2,
              fontSize: { xs: "18px", sm: "22px" },
              fontWeight: 600,
            }}
          >
            {s.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: { xs: "14px", sm: "16px" },
              lineHeight: { xs: "22px", sm: "26px" },
              px: { xs: 1, sm: 0 },
            }}
          >
            Developed interactive, responsive UIs using React.js, Material UI,
            and modern JavaScript (ES6+). Built and optimized reusable UI
            components for a scalable and maintainable architecture. Optimized
            application performance and collaborated closely with designers and
            backend teams for smooth integration.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0ef",
              color: "#001b29",
              borderRadius: "40px",
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.2 },
              fontSize: { xs: "14px", sm: "16px" },
              "&:hover": { backgroundColor: "#00ffff" },
            }}
          >
            Learn More
          </Button>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Box>
  );
};

export default Services;
