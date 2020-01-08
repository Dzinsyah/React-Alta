import React, { Component } from "react";
import Component2 from "../Component/component2";
import Component3 from "../Component/component3";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class Page2 extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "yellow", backgroundColor: "red" }}>
          Ini page 2 {this.props.number}
        </h1>
        <Component2 />
        <Component3 />
      </div>
    );
  }
}

export default connect("number", actions)(withRouter(Page2));
