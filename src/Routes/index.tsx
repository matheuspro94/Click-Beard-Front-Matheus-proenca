import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { DashboardAdmin } from "../pages/DashboardAdmin";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { RegisterBarber } from "../pages/RegisterBarber";
import { Scheduling } from "../pages/Scheduling";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/scheduling" element={<Scheduling />} />
      <Route path="/admin" element={<DashboardAdmin />} />
      <Route path="/register-barber" element={<RegisterBarber />} />
    </Routes>
  )
};