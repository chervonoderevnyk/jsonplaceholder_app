import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import React from "react";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export { MainLayout };
