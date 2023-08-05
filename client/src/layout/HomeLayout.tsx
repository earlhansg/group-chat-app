import Login from "../components/Login";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import imageURL from "../utils/images/bg-img2.jpg";
import { ThemeContext } from "../utils/theme/ThemeContext";
import { relative } from "path";

const HomeLayout = () => {
  const theme = useContext(ThemeContext);
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Typography
        sx={{
          color: (theme) => theme.palette.primary.dark,
          fontSize: "15px",
          m: 2,
          textAlign: "center",
          fontWeight: "400",
        }}
        component="h4"
      >
        Your order ships for free!
      </Typography> */}
      <Box
        sx={{
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Login />
      </Box>
    </Box>
  );
};

export default HomeLayout;
