import { createTheme } from "@mui/material";

export const getTheme = (mode) =>
    createTheme({
        palette: {
            mode,
            ...(mode === "dark"
                ? {
                    primary: { main: "#0ef" },
                    background: { default: "#07121b", paper: "#07121b" },
                    text: { primary: "#ffffff" },
                }
                : {
                    primary: { main: "#051129" },
                    background: { default: "#f5f7fb", paper: "#ffffff" },
                    text: { primary: "#000000" },
                }),
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        boxShadow: "none",
                    },
                },
            },
        },
    });
