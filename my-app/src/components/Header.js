import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Header() {
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const [isLoggedin, user] = useContext(AppContext);
  const history = useHistory();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
        // setIsLoggedin(false);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <nav className="py-5 bg-gray-900 text-white">
      <ul className="flex justify-between px-10">
        <span className="flex">
          <li className="mr-5">
            <NavLink
              to="/"
              exact={true}
              activeClassName="underline text-blue-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName="underline text-blue-200">
              Gallery
            </NavLink>
          </li>
        </span>
        <li>
          {isLoggedin ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink to="/login" activeClassName="underline text-blue-200">
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
