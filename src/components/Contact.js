import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  WhatsApp,
  LinkedIn,
  Email,
  Phone,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 10, px: "10%" }}>
      <Grid container spacing={6} alignItems="flex-start">
        {/* Left: Text Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3">
            Contact <span style={{ color: "#0ef" }}>Me</span>
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Let's Work Together
          </Typography>

          <Stack spacing={1} sx={{ mt: 4 }}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ color: "#0ef", mr: 1 }} /> srikanthkumarreddy.m@gmail.com
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Phone sx={{ color: "#0ef", mr: 1 }} /> 8179130242
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <IconButton href="https://facebook.com" sx={{ color: "#0ef" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" sx={{ color: "#0ef" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://whatsapp.com" sx={{ color: "#0ef" }}>
              <WhatsApp />
            </IconButton>
            <IconButton href="www.linkedin.com/in/srikanth-kumar-reddy-maturu" sx={{ color: "#0ef" }}>
              <LinkedIn />
            </IconButton>
          </Stack>
        </Grid>

        {/* Right: Contact Form */}
        <Grid item xs={12} md={6}>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Enter Your Name"
              variant="filled"
              required
              fullWidth
              sx={{
                bgcolor: "#555557",
                borderRadius: "10px",
                input: { color: "#fff" },
                label: { color: "#ccc" },
              }}
            />
            <TextField
              label="Enter Your Email"
              type="email"
              variant="filled"
              required
              fullWidth
              sx={{
                bgcolor: "#555557",
                borderRadius: "10px",
                input: { color: "#fff" },
                label: { color: "#ccc" },
              }}
            />
            <TextField
              label="Enter Your Subject"
              variant="filled"
              fullWidth
              sx={{
                bgcolor: "#555557",
                borderRadius: "10px",
                input: { color: "#fff" },
                label: { color: "#ccc" },
              }}
            />
            <TextField
              label="Enter Your Message"
              variant="filled"
              fullWidth
              required
              multiline
              rows={6}
              sx={{
                bgcolor: "#555557",
                borderRadius: "10px",
                textarea: { color: "#fff" },
                label: { color: "#ccc" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                mt: 2,
                alignSelf: "flex-start",
                backgroundColor: "#0ef",
                color: "#081b29",
                borderRadius: "40px",
                px: 5,
                py: 1.5,
                fontWeight: 600,
                boxShadow: "0 0 25px #0ef",
                "&:hover": {
                  backgroundColor: "#00ffff",
                  boxShadow: "0 0 40px cyan",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
