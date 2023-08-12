import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Users from "../components/room/users/Users";
import Chat from "../components/room/chat/Chat";
import GroupDetails from "../components/room/GroupDetails";
import { ThemeContext } from "../utils/theme/ThemeContext";

const RoomLayout = () => {
  const theme = useContext(ThemeContext);
  return (
    <Grid container>
      <Grid
        item
        xs={3}
        sx={{
          borderRight: `1.9px solid ${theme.palette.primary.light}`,
          height: "100%",
        }}
      >
        <Users />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          borderRight: `1.9px solid ${theme.palette.primary.light}`,
          height: "100%",
        }}
      >
        <Chat />
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          borderRight: `1.9px solid ${theme.palette.primary.light}`,
          height: "100%",
        }}
      >
        <GroupDetails />
      </Grid>
    </Grid>
  );
};

export default RoomLayout;
