import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import PortfoliioIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";

import GitHubIcon from "@mui/icons-material/GitHub";

const Services = () => {
  const projects = [
    {
      icon: <PublicIcon sx={{ fontSize: 50, color: "#00eeff" }} />,
      title: "Servigo - Local Services Marketplace",
      description: "A comprehensive MERN stack platform connecting local service providers with customers. Features real-time bookings, provider verification, and a robust admin dashboard.",
      liveLink: "https://servigo-pi.vercel.app/",
      githubLink: "https://github.com/srikanth-kumar-reddy-maturu",
    },
    {
      icon: <PortfoliioIcon sx={{ fontSize: 50, color: "#00eeff" }} />,
      title: "Interactive Portfolio Website",
      description: "A premium, responsive portfolio built with React and Material UI. Showcases projects with a dynamic design, featuring theme switching and seamless animations.",
      liveLink: "https://srikanth-portfolio-navy.vercel.app/",
      githubLink: "https://github.com/srikanth-kumar-reddy-maturu",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 50, color: "#00eeff" }} />,
      title: "Real-Time Collaborative Workspace",
      description: "A feature-rich collaboration tool with live chat and document editing. Built using Socket.io and React to ensure instantaneous synchronization across users.",
      liveLink: "https://github.com/srikanth-kumar-reddy-maturu", // Placeholder
      githubLink: "https://github.com/srikanth-kumar-reddy-maturu",
    },
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
        My <Box component="span" sx={{ color: "primary.main" }}>Projects</Box>
      </Typography>

      <Grid
        container
        spacing={{ xs: 3, sm: 4 }}
        sx={{ mt: { xs: 3, sm: 5 } }}
      >
        {projects.map((p, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
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
                  color: "primary.main",
                  mb: 2,
                }}
              >
                {p.icon}
              </Box>

              <Typography
                variant="h5"
                sx={{
                  my: 2,
                  fontSize: { xs: "18px", sm: "22px" },
                  fontWeight: 600,
                  color: (theme) => (theme.palette.mode === "light" ? "#000000" : theme.palette.text.primary),
                }}
              >
                {p.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: { xs: "14px", sm: "16px" },
                  lineHeight: { xs: "22px", sm: "26px" },
                  px: { xs: 1, sm: 0 },
                  color: (theme) => (theme.palette.mode === "light" ? "#000000" : theme.palette.text.primary),
                }}
              >
                {p.description}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  href={p.githubLink}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.main",
                    borderRadius: "40px",
                    "&:hover": { borderColor: "#00ffff", color: "#00ffff" },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  href={p.liveLink}
                  target="_blank"
                  sx={{
                    backgroundColor: "primary.main",
                    color: (theme) => theme.palette.mode === "light" ? "#fff" : "#001b29",
                    borderRadius: "40px",
                    "&:hover": { backgroundColor: "#00ffff" },
                  }}
                >
                  Live Demo
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
