import React from "react";
import { AppBar, Toolbar, Typography, Box, Link, IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = ({ mode = "dark", toggleTheme = () => { } }) => {
  const links = ["Home", "About", "Skills", "Certifications", "Contact"];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.main
            : theme.palette.background.default,
        px: { xs: 2, sm: 4 },
        py: 1,
        boxShadow: "none",
        zIndex: 1300,
      }}
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
            alignItems: "center",
            mt: { xs: 1, sm: 0 },
          }}
        ><Tooltip title={mode === "light" ? "Switch to dark" : "Switch to light"}>
            <IconButton
              onClick={toggleTheme}
              sx={{ ml: { xs: 0, sm: 1 }, color: "#fff" }}
              aria-label="toggle theme"
              size="large"
            >
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
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
