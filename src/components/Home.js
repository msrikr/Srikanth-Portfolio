import React, { useEffect } from "react";
import Typed from "typed.js";
import { Box, Typography, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["Frontend Developer", "React.Js Developer"],
      typeSpeed: 10,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        px: "10%",
        backgroundColor: "#0a1b2c",
      }}
    >
      <Box sx={{ maxWidth: "600px" }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Hello, It's
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Srikanth Kumar Maturu
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          And I'm a <span className="text" style={{ color: "#0ef" }}></span>
        </Typography>
        <Typography sx={{ fontSize: "18px", mb: 3 }}>
          I'm a React.Js Developer. Developed interactive, responsive UIs using
          React.js, Material UI, and modern JavaScript (ES6+). Built and
          optimized reusable UI components for a scalable and maintainable
          front-end architecture. Integrated front-end components with RESTful
          APIs using Axios and React Query. Enhanced application performance and
          load times by 30% through state management optimization (Redux,
          Context API). Collaborated closely with UX/UI designers and backend
          developers to ensure seamless API integration and consistent design
          systems. Participated in Agile sprints, code reviews, and deployment
          workflows using Git, AWS, and CI/CD pipelines.
        </Typography>

        <Box sx={{ mb: 2 }}>
          <IconButton href="https://facebook.com" sx={{ color: "#0ef" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://instagram.com" sx={{ color: "#0ef" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" sx={{ color: "#0ef" }}>
            <WhatsAppIcon />
          </IconButton>
          <IconButton href="www.linkedin.com/in/srikanth-kumar-reddy-maturu" sx={{ color: "#0ef" }}>
            <LinkedInIcon />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          href="#about"
          sx={{
            mt: 3,
            backgroundColor: "#0ef",
            color: "#081b29",
            borderRadius: "40px",
            px: 4,
            py: 1.5,
            boxShadow: "0 0 25px #0ef",
            "&:hover": {
              backgroundColor: "#00ffff",
              boxShadow: "0 0 50px cyan",
            },
          }}
        >
          More About Me
        </Button>
      </Box>
      <Box component="span" sx={{ flex: 1 }}></Box>
    </Box>
  );
};

export default Home;
