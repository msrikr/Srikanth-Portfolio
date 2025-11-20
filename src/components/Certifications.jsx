import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const certifications = [
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University",
    year: 2024,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/L1C6NFJIF8ZE",
},
{
 title: "Frontend Apps with React ",
 issuer: "Meta",
 year: 2024,
 link: "https://www.coursera.org/account/accomplishments/certificate/KI223AWTR2E1",
},
{
  title: "Backend Apps with Node.js and Express.js",
  issuer: "IBM",
  year: 2024,
  link: "https://www.coursera.org/account/accomplishments/certificate/LWUGJ2L0SQDF",
},
{
  title: "MongoDB: Developing Back-end Database Applications",
  issuer: "IBM",
  year: 2024,
  link: "https://www.coursera.org/account/accomplishments/certificate/82TSCNWFGDJS",
},
  {
    title: "Google Project Management",
    issuer: "Google",
    year: 2025,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/L51G2L7HD8FQ",
  },
];

const Certifications = () => {
  return (
    <Box id="certifications" sx={{ py: 6, px: { xs: 2, sm: 6, md: 10 } }}>

      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: 700 }}
      >
        Certifications
      </Typography>

      <Grid container spacing={2}>
        {certifications.map((cert, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                background: "#9ff",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 8,
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <WorkspacePremiumIcon
                  sx={{ fontSize: 50, color: "primary.main" }}
                />

                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {cert.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {cert.issuer} • {cert.year}
                  </Typography>

                  <Button
                    variant="contained"
                    size="small"
                    href={cert.link}
                    target="_blank"
                    sx={{
                      mt: 2,
                      borderRadius: 6,
                      textTransform: "none",
                    }}
                  >
                    View Certificate
                  </Button>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
