import React, { Component } from "react";
import Component1 from "../Component/component1";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Page1 extends Component {
  state = {
    alert: "halo"
  };
  changeStateOnStore = () => {
    store.setState({ stateToChangeFromPage: "sudah berubah" });
  };
  alertCheck = test => {
    alert(test);
    this.setState({ alert: "test" });
  };
  testInput = hasilInput => {
    console.warn(hasilInput.target.value);
  };
  render() {
    return (
      <div>
        <Component1 />
        <input
          placeholder="ini input pada page 1"
          name="inputPage1"
          onChange={e => this.props.handleInputChange(e)}
          // onClick={e => this.alertCheck(e)}
          // onChange={hasilInput => this.testInput(hasilInput)}
        />
        <p>cek hasil input page 1 : {this.props.inputPage1}</p>
        <button
          onClick={() => this.changeStateOnStore()}
          style={{
            backgroundColor: "red",
            color: "white",
            height: "30px",
            width: "250px"
          }}
        >
          ganti value state di store lewat page
        </button>
        <p>Nilai dari state : {this.props.stateToChangeFromPage}</p>
      </div>
    );
  }
}

export default connect(
  "inputPage1, stateToChangeFromPage",
  actions
)(withRouter(Page1));
