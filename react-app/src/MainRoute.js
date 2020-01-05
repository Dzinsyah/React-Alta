import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home/Home";
import SignIn from "./signin/SignIn";
import NotMatch from "./notmatch/NotMatch";
import News from "./news/News";
import Profile from "./profile/Profile";

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
