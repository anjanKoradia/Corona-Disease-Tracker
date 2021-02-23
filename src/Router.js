import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Layouts/Home/Home";
import About from "./Components/Layouts/About/About";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default Router;
