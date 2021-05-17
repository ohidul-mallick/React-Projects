import React from "react";
import Gallery from "../../page/Gallery";
import Home from "../../page/Home";
import Login from "../../page/Login";
import SignUp from "../../page/SignUp";
import Tensorflow from "../../page/Tensorflow";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
    protected: "auth",
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
    protected: "guest",
  },
  {
    path: "/signup",
    exact: true,
    component: () => <SignUp />,
    protected: "guest",
  },
  {
    path: "/tensorflow",
    exact: true,
    component: () => <Tensorflow />,
    protected: null,
  },
];
