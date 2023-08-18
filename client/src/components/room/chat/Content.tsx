import { Stack, Box, Typography, Badge, TextField, Fab } from "@mui/material";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import React, { useContext, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { io, Socket } from "socket.io-client";
import { UserContext } from "../../../utils/auth/UserContext";

// const socket: Socket = io("http://localhost:3001");

const socket: Socket = io("http://localhost:3001");

type Message = {
  room: string;
  author: string;
  message: string;
  time: string;
};

const Content = () => {
  const theme = useContext(ThemeContext);
  const userContext = useContext(UserContext);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<Message[]>([]);
  const borderStyle = {};

  const checkBorderStyle = (author: string) => {
    if (userContext?.user?.username === author) {
      return {
        backgroundColor: theme.palette.secondary.main,
        maxWidth: "300px",
        height: "auto",
        borderTopLeftRadius: "25px",
        borderBottomLeftRadius: "25px",
        borderTopRightRadius: "25px",
        borderBottomRightRadius: "0",
      };
    } else
      return {
        border: `1px solid ${theme.palette.primary.light}`,
        maxWidth: "300px",
        height: "auto",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "25px",
        borderTopRightRadius: "25px",
        borderBottomRightRadius: "25px",
      };
  };

  // useEffect(() => {
  //   const socket = io("http://localhost:3001");
  //   socket.emit("join_room", userContext?.user?.code);
  //   socket.on("receive_message", (data: Message) => {
  //     setMessageList((list) => [...list, data]);
  //   });
  // }, socket);

  // const socket = io("http://localhost:3001");

  useEffect(() => {
    socket.emit("join_room", userContext?.user?.code);
    socket.on("receive_message", (data: Message) => {
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket.disconnect(); // Clean up the socket connection on unmount
    };
  }, [socket, userContext?.user?.code]);

  const sendMessage = async () => {
    console.log("click");
    if (currentMessage !== "") {
      const messageData: Message = {
        room: "area51",
        author: userContext?.user?.username || "",
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} sx={{ height: "90%" }}>

      {messageList.map(({ author, message }, index) => {
        return (
          <Stack key={index} m={3} mb={"auto"}>
            <Typography
              mr={1}
              sx={{
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: 1,
                textAlign:
                  author !== userContext?.user?.username ? "left" : "right",
              }}
            >
              {author === userContext?.user?.username
                ? "You"
                : author !== userContext?.user?.username &&
                  messageList[index === 0 ? -1 : index - 1].author === author
                ? ""
                : author}
            </Typography>
            <Stack
              flexDirection={"row"}
              justifyContent={
                author !== userContext?.user?.username ? "start" : "end"
              }
            >
              <Stack style={checkBorderStyle(author)} p={2}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    marginBottom: 1,
                  }}
                >
                  {message} {index}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        );
      })}

      <Stack flexDirection={"row"} gap={2} m={3}>
        <TextField
          InputProps={{ sx: { borderRadius: "25px" } }}
          id="outlined-basic"
          placeholder="Type a Message"
          variant="outlined"
          sx={{
            flexGrow: 1,
          }}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            setCurrentMessage(event.target.value);
          }}
          value={currentMessage}
        />
        <Fab onClick={sendMessage}>
          <SendIcon />
        </Fab>
      </Stack>
    </Box>
  );
};

export default Content;
