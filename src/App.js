import React, { Component } from "react";
import MainRoute from "./Routes/MainRoute";

class App extends Component {
  render() {
    return (
      <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
        <MainRoute />
      </div>
    );
  }
}

export default App;
