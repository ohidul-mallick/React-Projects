import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
