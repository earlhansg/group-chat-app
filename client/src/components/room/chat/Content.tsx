import {
  Stack,
  Box,
  Typography,
  TextField,
  Fab
} from "@mui/material";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import SendIcon from "@mui/icons-material/Send";
import { io, Socket } from "socket.io-client";
import { UserContext } from "../../../utils/auth/UserContext";

type Message = {
  room: string;
  author: string;
  message: string;
  time: string;
};

const socket = io("http://localhost:3001");

const Content = () => {
  const theme = useContext(ThemeContext);
  const userContext = useContext(UserContext);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<Message[]>([]);

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

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (!socket) {
      setSocket(io("http://localhost:3001").emit("join_room", "area51"));
    }

    socket?.on("receive_message", (data: Message) => {
      console.log("data", data);
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket?.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("socket connected");
    });

    socket.on("event1", (data1) => {});

    return () => {
      socket.off("connect");
      socket.off("event1");
    };
  }, [socket]);

  const sendMessage = async () => {
    // console.log("click");
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
      await socket?.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        height: "90%",
        justifyContent: !messageList.length ? "end" : "unset",
      }}
    >
      <Stack
        m={3}
        p={3}
        mb={"auto"}
        sx={{
          height: "100%",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: 10,
            marginLeft: "10px",
            marginRight: "10px",
          },
          "&::-webkit-scrollbar-track": {
            // backgroundColor: "orange"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.light,
            // borderRadius: 2
          },
        }}
      >
        {messageList.map(({ author, message, time }, index) => {
          return (
            <Stack key={index}>
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
                {author === userContext?.user?.username &&
                messageList[index === 0 ? -1 : index - 1]?.author ===
                  userContext?.user?.username
                  ? ""
                  : author !== userContext?.user?.username &&
                    messageList[index === 0 ? -1 : index - 1]?.author === author
                  ? ""
                  : author === userContext?.user?.username
                  ? "You"
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
                    {message}
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                mr={1}
                sx={{
                  fontSize: "11px",
                  marginBottom: 1,
                  textAlign:
                    author !== userContext?.user?.username ? "left" : "right",
                }}
              >
                {time === messageList[index === 0 ? -1 : index - 1]?.time &&
                messageList[index === 0 ? -1 : index - 1]?.author === author
                  ? ""
                  : time}
              </Typography>
            </Stack>
          );
        })}
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
