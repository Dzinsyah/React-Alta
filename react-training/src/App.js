import React, { Component } from "react";
import "./style/index.css";
import "./style/App.css";
import MainRoute from "./route/MainRoute";
import Navigation from "./Component/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MainRoute />
      </div>
    );
  }
}

export default App;
