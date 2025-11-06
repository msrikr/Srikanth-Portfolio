import React from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  CircularProgress,
} from "@mui/material";

const techSkills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 80 },
  { name: "JavaScript", value: 80 },
  { name: "React", value: 80 },
  { name: "GIT", value: 90 },
  { name: "Node.js", value: 90 },
  { name: "React Native", value: 50 },
];

const softSkills = [
  { name: "Creativity", value: 90 },
  { name: "Communication", value: 95 },
  { name: "Problem Solving", value: 80 },
  { name: "Team Work", value: 100 },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10, px: "10%" }}>
      {/* Technical Skills */}
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ textDecoration: "underline", textUnderlineOffset: "10px", mb: 6 }}
      >
        Technical <span style={{ color: "#0ef" }}>Skills</span>
      </Typography>

      <Grid container spacing={3}>
        {techSkills.map((skill, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>{skill.name}</Typography>
            <Box sx={{ position: "relative", mb: 3 }}>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#000",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#0ef",
                  },
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  right: 0,
                  top: -25,
                  fontSize: "12px",
                  color: "#fff",
                }}
              >
                {skill.value}%
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Professional Skills */}
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          textDecoration: "underline",
          textUnderlineOffset: "10px",
          mt: 10,
          mb: 6,
        }}
      >
        Professional <span style={{ color: "#0ef" }}>Skills</span>
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {softSkills.map((s, i) => (
          <Grid
            item
            xs={6}
            sm={3}
            key={i}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <Box sx={{ position: "relative", display: "inline-flex", mb: 2 }}>
              <CircularProgress
                variant="determinate"
                value={s.value}
                size={120}
                thickness={5}
                sx={{
                  color: "#0ef",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={100}
                size={120}
                thickness={5}
                sx={{ color: "#0ef" }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>{s.value}%</Typography>
              </Box>
            </Box>
            <Typography sx={{ fontWeight: 500 }}>{s.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
