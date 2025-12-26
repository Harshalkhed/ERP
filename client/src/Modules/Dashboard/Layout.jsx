import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="layout">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
