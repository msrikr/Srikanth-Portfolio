import React, { useState } from "react";
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

import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <Box id="contact" sx={{ py: 10, px: "10%" }}>
      <Grid container spacing={6} alignItems="flex-start">

        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "26px", sm: "36px", md: "42px" },
              fontWeight: 700,
            }}
          >
            Contact <Box component="span" sx={{ color: "primary.main" }}>Me</Box>
          </Typography>

          <Typography variant="h5" sx={{ mt: 2 }}>
            Let's Work Together
          </Typography>

          <Stack spacing={1} sx={{ mt: 4 }}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ color: "primary.main", mr: 1 }} />
              srikanthmaturu88@gmail.com
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Phone sx={{ color: "primary.main", mr: 1 }} />
              8179130242
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <IconButton href="https://facebook.com" sx={{ color: "primary.main" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" sx={{ color: "primary.main" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://whatsapp.com" sx={{ color: "primary.main" }}>
              <WhatsApp />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/srikanth-kumar-reddy-maturu"
              sx={{ color: "primary.main" }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </Grid>

        {/* Right Section — EMAILJS FORM */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={sendEmail}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Enter Your Name"
              name="from_name"
              variant="filled"
              required
              fullWidth
              value={formData.from_name}
              onChange={handleChange}
              sx={{
                bgcolor: "background.paper",
                borderRadius: "10px",
                input: { color: "text.primary" },
                label: { color: "text.secondary" },
              }}
            />

            <TextField
              label="Enter Your Email"
              name="from_email"
              type="email"
              variant="filled"
              required
              fullWidth
              value={formData.from_email}
              onChange={handleChange}
              sx={{
                bgcolor: "background.paper",
                borderRadius: "10px",
                input: { color: "text.primary" },
                label: { color: "text.secondary" },
              }}
            />

            <TextField
              label="Enter Your Subject"
              name="subject"
              variant="filled"
              fullWidth
              value={formData.subject}
              onChange={handleChange}
              sx={{
                bgcolor: "background.paper",
                borderRadius: "10px",
                input: { color: "text.primary" },
                label: { color: "text.secondary" },
              }}
            />

            <TextField
              label="Enter Your Message"
              name="message"
              variant="filled"
              fullWidth
              required
              multiline
              rows={6}
              value={formData.message}
              onChange={handleChange}
              sx={{
                bgcolor: "background.paper",
                borderRadius: "10px",
                textarea: { color: "text.primary" },
                label: { color: "text.secondary" },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                alignSelf: "flex-start",
                backgroundColor: "primary.main",
                color: (theme) => theme.palette.mode === "light" ? "#fff" : "#081b29",
                borderRadius: "40px",
                px: 5,
                py: 1.5,
                fontWeight: 600,
                boxShadow: (theme) => `0 0 25px ${theme.palette.primary.main}`,
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
