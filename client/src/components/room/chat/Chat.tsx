import React from 'react'
import { Box } from "@mui/material";
import Header from './Header';
import Content from './Content';

const Chat = () => {
  return (
    <Box sx={{height:"100vh"}}>
      <Header/>
      <Content/>
    </Box>
  )
}

export default Chat
