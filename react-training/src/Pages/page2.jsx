import React, { Component } from "react";
import Component2 from "../Component/component2";
import Component3 from "../Component/component3";
import Navigation from "../Component/navigation";

class Page1 extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1 style={{ color: "yellow", backgroundColor: "red" }}>Ini page 2</h1>
        <Component2 />
        <Component3 />
      </div>
    );
  }
}

export default Page1;
