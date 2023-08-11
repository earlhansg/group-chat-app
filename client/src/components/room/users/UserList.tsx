import { Stack, Box, Typography, Badge } from "@mui/material";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import React, { useContext, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const UserList = () => {
  const theme = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Stack sx={{ marginTop: 3, marginLeft: 4, marginRight: 3 }}>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: "600",
          marginBottom: 1,
        }}
        color="secondary"
      >
        Online
      </Typography>
      <Box
        marginTop={1}
        sx={{
          display: "flex",
          alignItems: "center",
          ":hover": {
            backgroundColor: isHovered ? theme.palette.primary.light : null,
            transition: isHovered
              ? "transform 150ms, background-color 150ms"
              : null,
          },
        }}
        gap={1}
        p={2}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
      </Box>
      <Box
        marginTop={1}
        sx={{
          display: "flex",
          alignItems: "center",
          ":hover": {
            backgroundColor: isHovered ? theme.palette.primary.light : null,
            transition: isHovered
              ? "transform 150ms, background-color 150ms"
              : null,
          },
        }}
        gap={1}
        p={2}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
          Kristy Mae Jomoc Almuete
        </Typography>
      </Box>
    </Stack>
  );
};

export default UserList;
