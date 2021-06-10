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
      <Route path="/liveCase" component={LiveCases} />
      <Route path="/treatment" component={Treatment} />
      <Route path="/prevention" component={Prevention} />
      <Route path="/symptoms" component={Symptoms} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Router;
