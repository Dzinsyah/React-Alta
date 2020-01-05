import React, { Component } from "react";
import MainRoute from "./MainRoute";
import { withRouter } from "react-router-dom";

// App styles
import "./App.css";
// Custom components
import Navigation from "./navigation/Navigation";

class AppAjax extends Component {
  postSignout = () => {
    localStorage.removeItem("is_login");
    // localStorage.clear()
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="App">
        <Navigation postSignout={this.postSignout} />
        <MainRoute />
      </div>
    );
  }
}

export default withRouter(AppAjax);
