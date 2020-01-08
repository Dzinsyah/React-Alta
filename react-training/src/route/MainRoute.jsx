import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import NotMatch from "../Pages/NotMatch";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      <Route component={NotMatch} />
    </Switch>
  );
};

export default MainRoute;
