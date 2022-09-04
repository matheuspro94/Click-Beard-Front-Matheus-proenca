import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Scheduling } from "../pages/Scheduling";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/scheduling" element={<Scheduling />} />
    </Routes>
  )
};