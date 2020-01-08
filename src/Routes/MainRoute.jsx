import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import NotMatch from "../Pages/NotMatch";
import News from "../Pages/News";
import Profile from "../Pages/Profile";
import NewsCategory from "../Pages/NewsCategory";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/news" component={News} />
        {/* Di bawah ini handle route yang memiliki format 'https://localhost:3000/news-category/{apapun}' */}
        <Route path="/news-category/:category" component={NewsCategory} />
        {/* Di bawah ini handle route yang tidak terdaftar */}
        <Route component={NotMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoute;
