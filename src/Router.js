import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Layouts/Home/Home";
import About from "./Components/Layouts/About/About";
import Symptoms from "./Components/Layouts/Symptoms/Symptoms";
import Prevention from "./Components/Layouts/Prevention/Prevention";
import Treatment from "./Components/Layouts/Treatment/Treatment";
import LiveCases from "./Components/Layouts/LiveCases/LiveCases";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/symptoms" component={Symptoms} />
      <Route exact path="/prevention" component={Prevention} />
      <Route exact path="/treatment" component={Treatment} />
      <Route exact path="/liveCase" component={LiveCases} />
    </Switch>
  );
}

export default Router;
