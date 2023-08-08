import { Fab, Stack } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Settings from "@mui/icons-material/Settings";
import CreateOutlined from "@mui/icons-material/CreateOutlined";

const Header = () => {
  return (
    <>
      <Stack p={2} direction="row">
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
