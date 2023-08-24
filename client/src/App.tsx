import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import RoomLayout from "./layout/RoomLayout";
import { ThemeContextProvider } from "./utils/theme/ThemeContext";
import UserContextProvider from "./utils/auth/UserContext";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "room",
    element: <RoomLayout />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <ThemeContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
          <Outlet />
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
