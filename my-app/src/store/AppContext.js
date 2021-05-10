import React from "react";

const AppContext = React.createContext({ isLoggedin: false, user: {} });
export default AppContext;
