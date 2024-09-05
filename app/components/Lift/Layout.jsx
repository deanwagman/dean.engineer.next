"use client";

import { Outlet } from "react-router-dom";
import router from "./Router";

import Button from "@mui/material/Button";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
};

const Container = ({}) => {
  return (
    <div style={containerStyle}>
      <Outlet />
    </div>
  );
};

export default Container;
