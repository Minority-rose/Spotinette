import React from "react";
import { Navigate } from 'react-router-dom';

// Route Views
import Login from "./views/Login";

export const Routes = [
  {
    path: "/",
    exact: true,
    component: () => <Navigate to="/Login" />,
  },
  {
    path: "/Login",
    component: Login,
  }
];
