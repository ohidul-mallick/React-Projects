import "./assets/css/style.css";
import React, { useEffect, useRef, useState } from "react";
import Images from "./components/Images";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import firebase from "./config/firebase";
import routes from "./utils/routes/index";
import Header from "./components/Header";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/NotFound";

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <AppContext.Provider value={[isLoggedin, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }
            if (route.protected === "auth") {
              return (
                <AuthRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
