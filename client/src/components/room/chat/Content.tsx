import { Stack, Box, Typography, Badge } from "@mui/material";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import React, { useContext } from "react";

const Content = () => {
  const theme = useContext(ThemeContext);
  return (
    <Box>
      <Stack m={2}>
        <Typography mr={1}
                sx={{
                    fontSize: "13px",
                    fontWeight: "700",
                    marginBottom: 1,
                    textAlign: "right"
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

      <Stack m={2}>
        <Typography mr={1}
                sx={{
                    fontSize: "13px",
                    fontWeight: "700",
                    marginBottom: 1,
                    textAlign: "left"
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
      
    </Box>
  );
};

export default Content;
