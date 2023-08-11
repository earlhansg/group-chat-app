import { ThemeContext } from "../utils/theme/ThemeContext";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";

const Login = () => {
  const theme = useContext(ThemeContext);
  return (
    <Box
      sx={{
        width: "500px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "5px",
        marginTop: "5rem"
      }}
    >
      <Box marginTop={4}>
        <Typography
          sx={{
            fontSize: "20px",
            color: theme.palette.primary.contrastText,
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          Welcome back!
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: theme.palette.secondary.contrastText,
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          We're so excited to see you again!
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} marginTop={3}>
        <Stack sx={{ width: "90%" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: theme.palette.primary.contrastText,
              fontWeight: "400",
              marginBottom: 1
            }}
          >
            USERNAME
          </Typography>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            variant="filled"
            color="secondary"
          />
        </Stack>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} marginTop={3}>
        <Stack sx={{ width: "90%" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: theme.palette.primary.contrastText,
              fontWeight: "400",
              marginBottom: 1
            }}
          >
            CODE
          </Typography>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            variant="filled"
            color="secondary"
          />
        </Stack>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        marginTop={3}
        marginBottom={3}
      >
        <Stack sx={{ width: "90%" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "100%", color: theme.palette.primary.contrastText }}
          >
            Join
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
