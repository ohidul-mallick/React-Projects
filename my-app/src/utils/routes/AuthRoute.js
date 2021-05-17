import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import Loading from "../../components/Loading";
import AppContext from "../../store/AppContext";
import AnimatedRoutes from "./AnimatedRoutes";

export default function AuthRoute({ children, ...rest }) {
  const [isLoggedin] = useContext(AppContext);

  if (isLoggedin) {
    return <AnimatedRoutes {...rest}>{children}</AnimatedRoutes>;
  }
  return <Redirect to="/login" />;
}
