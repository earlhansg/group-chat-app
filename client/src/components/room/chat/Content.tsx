import { Stack, Box, Typography, Badge, TextField, Fab } from "@mui/material";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import React, { useContext } from "react";
import SendIcon from "@mui/icons-material/Send";

const Content = () => {
  const theme = useContext(ThemeContext);

  return (
    <Box display={"flex"} flexDirection={"column"} sx={{ height: "90%" }}>
      <Stack m={3}>
        <Typography
          mr={1}
          sx={{
            fontSize: "13px",
            fontWeight: "700",
            marginBottom: 1,
            textAlign: "right",
          }}
        >
          You
        </Typography>
        <Stack flexDirection={"row"} justifyContent={"end"}>
          <Stack
            sx={{
              backgroundColor: theme.palette.secondary.main,
              maxWidth: "300px",
              height: "auto",
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "0",
            }}
            p={2}
          >
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}
            >
              Hi, how many online here ?
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack m={3} mb={"auto"}>
        <Typography
          mr={1}
          sx={{
            fontSize: "13px",
            fontWeight: "700",
            marginBottom: 1,
            textAlign: "left",
          }}
        >
          Brian
        </Typography>
        <Stack flexDirection={"row"} justifyContent={"start"}>
          <Stack
            sx={{
              border: `1px solid ${theme.palette.primary.light}`,
              maxWidth: "300px",
              height: "auto",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "25px",
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
            p={2}
          >
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}
            >
              Im online bro
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack flexDirection={"row"} gap={2} m={3}>
        <TextField
          InputProps={{ sx: { borderRadius: "25px" } }}
          id="outlined-basic"
          placeholder="Type a Message"
          variant="outlined"
          sx={{
            flexGrow: 1,
          }}
        />
        <Fab disabled size="large">
          <SendIcon />
        </Fab>
      </Stack>
    </Box>
  );
};

export default Content;
