import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Search from "./Search";

const logoWrapper = {
  display: "block",
  width: "100px",
  float: "left",
  textAlign: "center"
};

class Navigation extends React.Component {
  handleRouterNav = categoryName => {
    const category = categoryName;
    this.props.history.replace("/news-category/" + category);
  };

  postSignout = () => {
    localStorage.removeItem("is_login");
    // localStorage.clear()
    this.props.history.push("/");
  };
  render() {
    console.warn("cek this props pada navigation", this.props);
    return (
      <nav id="topnav">
        <div style={logoWrapper}>
          <img src={logo} className="App-logo" alt="logo" /> <b>ReactNews</b>
        </div>
        <ul id="topmenu">
          <li className="menu">
            <Link to="/">Home</Link>
          </li>
          <li className="menu">
            <Link to="/signup">SignUp</Link>
          </li>
          <li className="menu">
            <Link to="/signin">SignIn</Link>
          </li>
          <li className="menu">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="menu">
            <Link onClick={this.postSignout}>SignOut</Link>
          </li>
          <li className="menu">
            <Link to="/news">News</Link>
          </li>
          <li
            className="menu"
            value="sport"
            onClick={
              this.props.isCategoryNews !== undefined
                ? () => this.props.handleRouter("sports")
                : () => this.handleRouterNav("sports")
            }
          >
            Olah Raga
          </li>
          <li
            className="menu"
            value="business"
            onClick={
              this.props.isCategoryNews !== undefined
                ? () => this.props.handleRouter("business")
                : () => this.handleRouterNav("business")
            }
          >
            Bisnis
          </li>
          <Search {...this.props} />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
