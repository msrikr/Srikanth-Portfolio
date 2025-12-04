import React, { useMemo, useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Certifications from "./components/Certifications";
import { getTheme } from "./theme/theme";

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} toggleTheme={toggleTheme} />
      <Box sx={{ mt: "80px" }}>
        <Home />
        <About />
        <Services />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
