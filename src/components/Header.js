import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  IconButton,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ mode = "dark", toggleTheme = () => { } }) => {
  const links = ["Home", "About", "Skills", "Certifications", "Contact"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
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
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Hamburger Menu Icon - Mobile Only */}
          <IconButton
            onClick={toggleMobileMenu}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#fff",
              mr: 2
            }}
            aria-label="menu"
            size="large"
          >
            <MenuIcon />
          </IconButton>

          {/* Portfolio Name */}
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: "14px", sm: "20px" },
              flexGrow: 1, // Pushes desktop links/mobile icon to the right
              textAlign: "left",
            }}
          >
            Srikanth Kumar Portfolio
          </Typography>

          {/* Desktop Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Tooltip title={mode === "light" ? "Switch to dark" : "Switch to light"}>
              <IconButton
                onClick={toggleTheme}
                sx={{ color: "#fff" }}
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

          {/* Mobile Theme Toggle */}
          <Tooltip title={mode === "light" ? "Switch to dark" : "Switch to light"}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#fff"
              }}
              aria-label="toggle theme"
              size="large"
            >
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.main
                : theme.palette.background.default,
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton onClick={toggleMobileMenu} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {links.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component="a"
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(14, 239, 255, 0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    color: "#fff",
                    "& .MuiTypography-root": {
                      fontSize: "18px",
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
