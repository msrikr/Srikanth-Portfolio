import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";

const Header = () => {
  const links = ["Home", "About", "Skills", "Portfolio", "Contact"];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#051129", px: 4, py: 1, boxShadow: "none", zIndex:1300 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>Portfolio</Typography>
        <Box>
          {links.map((item, i) => (
            <Link
              key={i}
              href={`#${item.toLowerCase()}`}
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "18px",
                mx: 2,
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
