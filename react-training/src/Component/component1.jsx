import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../style/style.css";

class Componenet1 extends Component {
  callAlert = () => {
    alert("kamu berhasil klik button ini");
  };
  render() {
    return (
      <div>
        <input
          placeholder="ini input pada component 1"
          name="inputComponent1"
          onChange={e => this.props.handleInputChange2(e)}
        />
        <p>cek hasil input component 1:{this.props.inputComponent1}</p>
      </div>
    );
  }
}

export default connect("inputComponent1", actions)(withRouter(Componenet1));
