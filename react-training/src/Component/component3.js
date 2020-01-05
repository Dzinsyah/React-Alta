import React, { Component } from "react";
import logo from "../logo.svg";

const styleLogo = {
  borderRadius: "50%",
  maxHeight: "100px"
};
class Componenet2 extends Component {
  render() {
    return (
      <div>
        <h3 style={{ color: "green" }}>ini component 3</h3>
        <img src={logo} style={styleLogo} alt="logo2" />
      </div>
    );
  }
}

export default Componenet2;
