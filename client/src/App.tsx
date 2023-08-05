import React, { useState, useEffect } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  // useEffect(() => {
  //   // You can use the 'socket' object here for your socket operations
    
  //   return () => {
  //     // Clean up the socket connection if needed
  //     socket.disconnect();
  //   };
  // }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div className="App">
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input
          type="text"
          placeholder="John..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
        <button onClick={joinRoom}>Join A Room</button>
      </div>
    </div>
  );
}

export default App;
