import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Header() {
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, isLoggedin] = useContext(AppContext);
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </span>
        <li>
          {isLoggedin ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
