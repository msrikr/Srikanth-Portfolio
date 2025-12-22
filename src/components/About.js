import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";


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
            About <Box component="span" sx={{ color: "primary.main" }}>Me</Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              my: 2,
              color: (theme) => (theme.palette.mode === "light" ? "#000000" : theme.palette.text.primary),
              fontSize: { xs: "18px", sm: "22px" },
              fontWeight: { xs: 500, sm: 600 },
            }}
          >
            React.Js Developer!
          </Typography>

          <Typography>As a results-driven Full Stack Developer with specialized expertise in the
            MERN Stack (MongoDB, Express.js, React.js, Node.js), I focus on engineering
            scalable, high-impact web solutions. Over the past year, I have refined my
            skills in architecting clean, maintainable codebases and implementing
            user-centric designs that prioritize performance and accessibility. I am
            deeply committed to agile development practices and cloud-native deployments,
            consistently collaborating with cross-functional teams to solve complex
            technical challenges and deliver polished, production-ready applications.</Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-start" } }}>
            <Button
              variant="contained"
              href="#contact"
              sx={{
                backgroundColor: "primary.main",
                color: (theme) => theme.palette.mode === "light" ? "#fff" : "#081b29",
                borderRadius: "40px",
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                mt: 2,
                fontSize: { xs: "14px", sm: "16px" },
                boxShadow: (theme) => `0 0 25px ${theme.palette.primary.main}`,
                "&:hover": { boxShadow: "0 0 50px cyan" },
              }}
            >
              More About Me
            </Button>
            <Button
              variant="outlined"
              href="/resume/Srikanth Kumar.pdf"
              target="_blank"
              sx={{
                mt: 3,
                borderColor: "primary.main",
                color: "primary.main",
                borderRadius: "40px",
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                fontSize: { xs: "14px", sm: "16px" },
                "&:hover": {
                  borderColor: "#00ffff",
                  color: "#00ffff",
                  boxShadow: "0 0 25px rgba(0, 255, 255, 0.3)",
                },
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Grid>

        {/* RIGHT IMAGE SECTION */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/profile/Srikanth.webp"
            alt="Profile"
            sx={{
              width: { xs: "50%", sm: "55%", md: "60%" },
              aspectRatio: "1/1",
              objectFit: "cover",
              margin: "0 auto",
              borderRadius: "50%",
              display: "block",
              border: "4px solid #0ef",
              boxShadow: "0 0 20px #0ef"
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
