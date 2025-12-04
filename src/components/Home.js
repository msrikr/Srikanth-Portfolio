import React, { useEffect } from "react";
import Typed from "typed.js";
import { Box, Typography, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ThemeContext } from "@emotion/react";

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
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" }, // mobile = stacked, desktop = row
        px: { xs: "6%", sm: "10%" },
        backgroundColor: "background.default",
        textAlign: { xs: "center", sm: "left" },
        py: { xs: 6, sm: 0 },
      }}
    >
      {/* LEFT SIDE CONTENT */}
      <Box sx={{ flex: 1, mt: { xs: 2, sm: 0 } }}>
        <Typography
          variant="h5"
          sx={{
            mb: 1,
            fontSize: { xs: "18px", sm: "22px" },
            fontWeight: { xs: 400, sm: 500 },
          }}
        >
          Hello, It's
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: { xs: 600, sm: 700 },
            fontSize: { xs: "26px", sm: "40px", md: "48px" },
            lineHeight: { xs: "34px", sm: "52px" },
          }}
        >
          Srikanth Kumar Maturu
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontSize: { xs: "18px", sm: "24px" },
            fontWeight: { xs: 400, sm: 500 },
          }}
        >
          And I'm a{" "}
          <Box component="span" className="text" sx={{ color: "primary.main" }}></Box>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            mb: 3,
            lineHeight: { xs: "22px", sm: "26px" },
          }}
        >
          I'm a React.Js Developer. Developed interactive, responsive UIs using
          React.js, Material UI, and modern JavaScript (ES6+). Built and
          optimized reusable UI components for scalable architectures. Integrated
          front-end components with RESTful APIs using Axios and React Query.
          Enhanced performance by 30% through optimized state management and
          clean architecture patterns.
        </Typography>

        {/* SOCIAL ICONS */}
        <Box sx={{ mb: 2 }}>
          <IconButton sx={{ color: "primary.main", fontSize: { xs: "18px", sm: "24px" } }}>
            <FacebookIcon fontSize="inherit" />
          </IconButton>

          <IconButton sx={{ color: "primary.main", fontSize: { xs: "18px", sm: "24px" } }}>
            <InstagramIcon fontSize="inherit" />
          </IconButton>

          <IconButton sx={{ color: "primary.main", fontSize: { xs: "18px", sm: "24px" } }}>
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/srikanth-kumar-reddy-maturu"
            sx={{ color: "primary.main", fontSize: { xs: "18px", sm: "24px" } }}
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Box>

        {/* CTA BUTTON */}
        <Button
          variant="contained"
          href="#about"
          sx={{
            mt: 3,
            backgroundColor: "primary.main",
            color: (theme) => theme.palette.mode === "light" ? "#fff" : "#081b29",
            borderRadius: "40px",
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "14px", sm: "16px" },
            boxShadow: (theme) => `0 0 25px ${theme.palette.primary.main}`,
            "&:hover": {
              backgroundColor: "#00ffff",
              boxShadow: "0 0 50px cyan",
            },
          }}
        >
          More About Me
        </Button>
      </Box>

      {/* SPACING BOX FOR DESKTOP */}
      {/* <Box component="span" sx={{ flex: 1, display: { xs: "none", sm: "block" } }}></Box> */}
    </Box>
  );
};

export default Home;
