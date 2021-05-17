import "./assets/css/style.css";
import React, { useEffect, useRef, useState } from "react";
import Images from "./components/Images";
import { Switch, Route, Link, Redirect, useLocation } from "react-router-dom";
import firebase from "./config/firebase";
import routes from "./utils/routes/index";
import Header from "./components/Header";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/NotFound";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedRoutes from "./utils/routes/AnimatedRoutes";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLoggedin(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedin(false);
        setIsLoading(false);
      }
    });
  }, []);
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider value={[isLoggedin, user]}>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch key={location.pathname} location={location}>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </GuestRoute>
              );
            }
            if (route.protected === "auth") {
              return (
                <AuthRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </AuthRoute>
              );
            }
            return (
              <AnimatedRoutes key={index} path={route.path} exact={route.exact}>
                <route.component />
              </AnimatedRoutes>
            );
          })}

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AnimatePresence>
    </AppContext.Provider>
  );
}

export default App;
