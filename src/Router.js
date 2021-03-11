import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Example1 from "./Example1.react";
import Example2 from "./Example2.react";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav style={{ paddingBottom: '40px' }}>
          <ul>
            <li>
              <Link to="/example1">Example 1</Link>
            </li>
            <li>
              <Link to="/example2">Example 2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/example1">
            <Example1 />
          </Route>
          <Route path="/example2">
            <Example2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}