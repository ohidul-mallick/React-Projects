import "./assets/css/style.css";
import React, { useEffect, useRef, useState } from "react";
import Images from "./components/Images";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "./config/firebase";
import routes from "./utils/routes";
import Header from "./components/Header";
import AppContext from "./store/AppContext";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLoggedin(true);
        setUser(user);
      } else {
        setUser({});
        setIsLoggedin(false);
      }
    });
  }, []);

  return (
    <Router>
      <AppContext.Provider value={[isLoggedin, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
