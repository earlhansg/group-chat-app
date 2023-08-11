import { Stack, Box, Typography, Fab, Badge } from "@mui/material";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const UserList = () => {
  // const theme = useContext(ThemeContext);
  return (
    <Stack sx={{ marginTop: 3, marginLeft: 4, marginRight: 3 }}>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: "600",
          marginBottom: 1,
        }}
        color="primary"
      >
        Online
      </Typography>
      <Stack
        flexDirection={"row"}
        marginTop={1}
        sx={{ alignItems: "center" }}
        gap={1}
        p={2}
      >
        <Stack>
          <Badge
            color="info"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <FavoriteIcon color="primary" />
          </Badge>
        </Stack>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
          }}
          color="primary"
          ml={1}
        >
          Earl Hans Pelin Genoso
        </Typography>
      </Stack>
      <Stack
        flexDirection={"row"}
        marginTop={1}
        sx={{ alignItems: "center" }}
        gap={1}
        p={2}
      >
        <Stack>
          <Badge
            color="info"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <FavoriteIcon color="primary" />
          </Badge>
        </Stack>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
          }}
          color="primary"
          ml={1}
        >
          Kristy Mae Almuete
        </Typography>
      </Stack>
    </Stack>
  );
};

export default UserList;
