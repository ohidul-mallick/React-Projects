import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import Loading from "../../components/Loading";
import AppContext from "../../store/AppContext";

export default function AuthRoute(props) {
  const [isLoggedin] = useContext(AppContext);

  if (isLoggedin) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
}
