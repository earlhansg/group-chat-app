import { Fab, Stack } from "@mui/material";
import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Settings from "@mui/icons-material/Settings";
import CreateOutlined from "@mui/icons-material/CreateOutlined";
import { ThemeContext } from "../../../utils/theme/ThemeContext";


const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Stack p={2} direction="row" sx={{
        borderBottom: `1.9px solid ${theme.palette.primary.light}`,
        height: "auto",
      }}>
        <Fab disabled size="medium" sx={{ marginRight: "auto" }}>
          <FavoriteIcon />
        </Fab>
        <Stack direction="row" spacing={1}>
          <Fab disabled size="small">
            <CreateOutlined />
          </Fab>
          <Fab disabled size="small">
            <Settings />
          </Fab>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
