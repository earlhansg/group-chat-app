import { ThemeContext } from "@emotion/react";
import { Typography } from "@mui/material";
import { useContext } from "react";

const HomeLayout = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography
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
      </Typography>
    </div>
  );
};

export default HomeLayout;
