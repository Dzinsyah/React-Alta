import React, { Component } from "react";
import logo from "../logo.svg";

const styleLogo = {
  height: "50px",
  width: "50px"
};
class Componenet2 extends Component {
  render() {
    return (
      <div>
        <h3 style={{ color: "green" }}>ini component 2</h3>
        <img src={require("../logo.svg")} style={styleLogo} alt="logo1"></img>
        <img src={logo} style={styleLogo} alt="logo2" />
      </div>
    );
  }
}

export default Componenet2;
