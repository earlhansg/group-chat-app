import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import { Stack, Typography } from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Stack
        direction="row"
        sx={{
          borderBottom: `1.9px solid ${theme.palette.primary.light}`,
          height: "auto",
        }}
      >
        <Stack flexDirection={"column"} ml={3} mr={"auto"} mt={2.7}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: 1,
            }}
            color="primary"
          >
            UI/UX Developer
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginBottom: 1,
              color: theme.palette.primary.light,
            }}
          >
            Abel, Gulf, Nanon, Mew, Ohm... +17
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} mr={2}>
          <PhoneOutlinedIcon color="primary" />
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
