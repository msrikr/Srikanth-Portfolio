import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import MemoryIcon from '@mui/icons-material/Memory';

const Services = () => {
  const services = [
    { icon: <CodeIcon sx={{ fontSize: 50 }} />, title: "Java Full Stack Developer" },
    { icon: <IntegrationInstructionsIcon sx={{ fontSize: 50, color: "#00eeff" }} />, title: "MERN Stack Developer" },
    { icon: <MemoryIcon sx={{ fontSize: 50, color: "#00eeff" }} />, title: "React Developer" },
  ];

  return (
    <Box id="services" sx={{ py: 10, px: "10%" }}>
      <Typography variant="h3" textAlign="center">
        My <span style={{ color: "#0ef" }}>Skills</span>
      </Typography>

      <Grid container spacing={4} sx={{ mt: 5 }}>
        {services.map((s, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper
              sx={{
                p: 4,
                backgroundColor: "transparent",
                color: "aliceblue",
                borderRadius: 4,
                boxShadow: "1px 1px 40px #0053b8f7",
                textAlign: "center",
                "&:hover": { transform: "translateY(-10px)", transition: ".5s" },
              }}
            >
              {s.icon}
              <Typography variant="h5" sx={{ my: 2 }}>{s.title}</Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis fugit debitis.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0ef",
                  color: "#001b29",
                  borderRadius: "40px",
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
