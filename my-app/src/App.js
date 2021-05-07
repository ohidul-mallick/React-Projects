import "./assets/css/style.css";
import React, { Component, useEffect, useRef, useState } from "react";
import Images from "./components/Images";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./page";

const Gallery = () => {
  return (
    <section className="flex justify-center">
      <div className="w-10/12 ">
        <div className="text-center mb-4">
          <Images />
        </div>
      </div>
    </section>
  );
};

// const Home = () => {
//   return (
//     <div className="flex h-screen">
//       <h1 className="m-auto text-3xl">Welcome Home</h1>
//     </div>
//   );
// };
const Login = () => {
  return (
    <div className="flex h-screen">
      <h1 className="m-auto text-3xl">Login Page</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>

        <Route path="/gallery" exact={true}>
          <Gallery />
        </Route>

        <Route path="/login" exact={true}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
