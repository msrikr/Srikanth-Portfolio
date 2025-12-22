import React from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  CircularProgress,
} from "@mui/material";

const techSkills = [
  { name: "React", value: 80, color: "#61DAFB" },
  { name: "Next.Js", value: 60, color: "#FFFFFF" },
  { name: "Redux", value: 70, color: "#764ABC" },
  { name: "JavaScript", value: 80, color: "#F7DF1E" },
  { name: "HTML", value: 90, color: "#E34F26" },
  { name: "CSS", value: 80, color: "#1572B6" },
  { name: "Tailwind CSS", value: 90, color: "#06B6D4" },
  { name: "Material UI", value: 90, color: "#007FFF" },
  { name: "Node.js", value: 90, color: "#339933" },
  { name: "Express.js", value: 90, color: "#FFFFFF" },
  { name: "MongoDB", value: 90, color: "#47A248" },
  { name: "MySQL", value: 70, color: "#4479A1" },
  { name: "AWS", value: 70, color: "#FF9900" },
  { name: "GIT", value: 90, color: "#F05032" },
];

const softSkills = [
  { name: "Creativity", value: 90 },
  { name: "Communication", value: 95 },
  { name: "Problem Solving", value: 80 },
  { name: "Team Work", value: 100 },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10, px: { xs: "6%", sm: "10%" } }}>
      {/* Technical Skills */}
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          mb: 8,
          fontSize: { xs: "30px", sm: "36px", md: "42px" },
          fontWeight: 700,
        }}
      >
        Technical <Box component="span" sx={{ color: "primary.main" }}>Expertise</Box>
      </Typography>

      <Grid container spacing={4}>
        {techSkills.map((skill, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.04)"
                    : "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: 4,
                border: (theme) =>
                  `1px solid ${theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}`,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: skill.color,
                  boxShadow: (theme) =>
                    `0 10px 20px ${skill.color}${theme.palette.mode === "light" ? "44" : "33"}`,
                },
              }}
            >
              <Typography sx={{ mb: 2, fontWeight: 600, fontSize: "16px", letterSpacing: "0.5px" }}>
                {skill.name}
              </Typography>
              <Box sx={{ position: "relative" }}>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  sx={{
                    height: 6,
                    borderRadius: 5,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: skill.color,
                      borderRadius: 5,
                    },
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "right",
                    mt: 1,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: skill.color,
                  }}
                >
                  {skill.value}%
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Professional Skills */}
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          mt: 10,
          mb: 8,
          fontSize: { xs: "30px", sm: "36px", md: "42px" },
          fontWeight: 700,
        }}
      >
        Professional <Box component="span" sx={{ color: "primary.main" }}>Attributes</Box>
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
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                mb: 2,
                p: 1.5,
                borderRadius: "50%",
                background: (theme) =>
                  theme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.03)"
                    : "rgba(255, 255, 255, 0.03)",
                boxShadow: (theme) =>
                  `0 0 20px ${theme.palette.mode === "light" ? "rgba(0,0,0,0.05)" : "rgba(0, 238, 255, 0.1)"}`,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: (theme) =>
                    `0 0 30px ${theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(0, 238, 255, 0.3)"}`,
                  transform: "scale(1.05)",
                }
              }}
            >
              <CircularProgress
                variant="determinate"
                value={100}
                size={100}
                thickness={4}
                sx={{
                  color: "rgba(255, 255, 255, 0.1)",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={s.value}
                size={100}
                thickness={4}
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  "& .MuiCircularProgress-circle": {
                    stroke: "#0ef",
                    strokeLinecap: "round",
                  },
                }}
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
                <Typography sx={{ fontWeight: 700, fontSize: "18px", color: "#0ef" }}>{s.value}%</Typography>
              </Box>
            </Box>
            <Typography sx={{ fontWeight: 600, mt: 1, letterSpacing: "1px", textTransform: "uppercase", fontSize: "14px" }}>
              {s.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
