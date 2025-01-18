import { Navigate, Route, Routes } from "react-router";
import React from "react";
import Home from "@/components/pages/home";
import Project from "@/components/pages/project";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route index path="/" element={<Home></Home>} />

    <Route path="work">
      <Route index element={<Navigate to={"/"}></Navigate>} />
      <Route path=":id" element={<Project></Project>} />
    </Route>
    <Route path="/*" element={<div>Error</div>}></Route>
  </Routes>
);

