import React from "react";
import "./style.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Switch,
  Route
} from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Home from "./Home";
import AboutContact from "./AboutContact";
import Productions from "./Productions";
import Help from "./Help";
export default function App() {
  return (
    <div className="App">
      <Router>
        <nav id="navbar">
          <div class="container">
            <ul>
              <li>
                <Link to="/">
                  <img
                    width="50"
                    src="images/grandevitesse_bluewriting_blackbg.png"
                    alt="gv logo"
                  />
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Productions">Productions</Link>
              </li>
              <li>
                <Link to="/Help">Help</Link>
              </li>
              <li>
                <Link to="/AboutContact">About and Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Productions" component={Productions} />
          <Route path="/AboutContact" component={AboutContact} />
          <Route path="/Help" component={Help} />
        </Switch>
      </Router>
    </div>
  );
}
