import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Layouts/Home/Home";
import About from "./Components/Layouts/About/About";
import Symptoms from "./Components/Layouts/Symptoms/Symptoms";
import Prevention from "./Components/Layouts/Prevention/Prevention";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/symptoms" component={Symptoms} />
      <Route exact path="/prevention" component={Prevention} />
    </Switch>
  );
}

export default Router;
