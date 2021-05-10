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
    <nav className="py-5 bg-gray-900 text-white flex justify-between">
      <ul className="flex justify-between px-10">
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
      </ul>
      <ul className="flex justify-between px-10">
        <li>
          {isLoggedin ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink to="/login" activeClassName="underline text-blue-200">
              Login
            </NavLink>
          )}
        </li>
        {!isLoggedin && (
          <li className="ml-5">
            <NavLink to="/signup" activeClassName="underline text-blue-200">
              Signup
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
