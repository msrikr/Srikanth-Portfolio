import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#081b29", color: "#ededed", fontFamily: "Poppins, sans-serif" }}>
      <CssBaseline />
      <Header />
      <Box sx={{ mt: "80px" }}>
        <Home />
        <About />
        <Services />
        <Skills />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
