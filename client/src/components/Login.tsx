import { ThemeContext } from "../utils/theme/ThemeContext";
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'


const Login = () => {
const theme = useContext(ThemeContext);
  return (
    <Box sx={{
        width: '500px',
        backgroundColor: theme.palette.primary.main
    }}>
        <Typography
        sx={{
          fontSize: "15px",
          m: 2,
          textAlign: "center",
          fontWeight: "400",
        }}
        component="h4"
      >
        Your order ships for free!
      </Typography>
    </Box>
  )
}

export default Login
