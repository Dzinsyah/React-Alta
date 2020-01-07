import React, { Component } from "react";
import MainRoute from "./Routes/MainRoute";
import { withRouter } from "react-router-dom";

// App styles
import "./styles/App.css";
// Custom components
import Navigation from "./Components/Navigation";

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
