import React from "react";
import { Redirect } from "react-router-dom";

// lazy load all the views
const DashboardAdmin = React.lazy(() => import("../Pages/Dashboard/DashboardAdmin"));
const DashboardEntidade = React.lazy(() => import("../Pages/Dashboard/DashboardEntidade"));

// auth
const Login = React.lazy(() => import("../Pages/Auth/Login"));
const Register = React.lazy(() => import("../Pages/Auth/Register"));

// declare all routes
const authProtectedRoutes = [
   { path: "/dashboardAdmin", component: DashboardAdmin },
   { path: "/dashboardEntidade", component: DashboardEntidade },
   {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboardEntidade" />,
  },
];

const publicRoutes = [
   { path: "/login", component: Login },
   { path: "/register", component: Register }
];

export { authProtectedRoutes, publicRoutes };
