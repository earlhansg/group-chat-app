import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        light: '#d4d6da',
        main: '#36393f',
        dark: '#36393f',
        contrastText: '#dedfdf'
      },
      secondary: {
        light: '#7187dd',
        main: '#7187dd',
        dark: '#7187dd',
        contrastText: "#64676e"
      },
      action: {
        disabled: '#143a47'
      }
    }
});