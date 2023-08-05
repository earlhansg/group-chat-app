import React, { useState, useEffect } from "react";
import "./App.css";
import { io, Socket } from "socket.io-client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import { ThemeContextProvider } from "./utils/theme/ThemeContext";

// const socket: Socket = io("http://localhost:3001");

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  // const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");

  // useEffect(() => {
  //   // You can use the 'socket' object here for your socket operations

  //   return () => {
  //     // Clean up the socket connection if needed
  //     socket.disconnect();
  //   };
  // }, []);

  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };
  return (
    // <div className="App">
    //   <div className="joinChatContainer">
    //     <h3>Join A Chat</h3>
    //     <input
    //       type="text"
    //       placeholder="John..."
    //       onChange={(event) => {
    //         setUsername(event.target.value);
    //       }}
    //     />
    //     <input
    //         type="text"
    //         placeholder="Room ID..."
    //         onChange={(event) => {
    //           setRoom(event.target.value);
    //         }}
    //       />
    //     <button onClick={joinRoom}>Join A Room</button>
    //   </div>
    // </div>
    // <>
    //   <RouterProvider router={router} />
    //   <Outlet />
    // </>
    <>
    <ThemeContextProvider>
      <RouterProvider router={router} />
      <Outlet />
    </ThemeContextProvider>
    </>
  );
}

export default App;
