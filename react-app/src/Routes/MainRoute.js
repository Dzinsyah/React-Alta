import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import NotMatch from "../Pages/NotMatch";
import News from "../Pages/News";
import Profile from "../Pages/Profile";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/news" component={News} />
      <Route component={NotMatch} />
    </Switch>
  );
};

export default MainRoute;
