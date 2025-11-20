import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";

const Header = () => {
  const links = ["Home", "About", "Skills", "Certifications", "Contact"];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#051129", px: { xs: 2, sm: 4 }, py: 1, boxShadow: "none", zIndex: 1300 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },   // <-- mobile = column, desktop = row
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          width: "100%",
          gap: { xs: 1, sm: 0 },  // spacing between lines on mobile
        }}
      >
        {/* Portfolio Name */}
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: { xs: "18px", sm: "20px" },
            mt: { xs: 1, sm: 0 },
          }}
        >
          Srikanth Kumar Portfolio
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            mt: { xs: 1, sm: 0 },
          }}
        >
          {links.map((item, i) => (
            <Link
              key={i}
              href={`#${item.toLowerCase()}`}
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: { xs: "15px", sm: "18px" },
                mx: { xs: 1, sm: 2 },
                my: { xs: 0.5, sm: 0 },
                transition: ".3s",
                "&:hover": { color: "#0ef" },
              }}
            >
              {item}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
