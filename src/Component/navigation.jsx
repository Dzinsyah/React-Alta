import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
// import Search from "./Search";

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
      <header style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container-fluid row">
            <div className="col-lg-2 d-flex align-items-center">
              <Link to='/' onClick={() => this.props.isNews ? this.props.setCategory('general') : this.handlingCategory('general')} className="navbar-brand">
                <img src={logo} className="App-logo" alt="logo" /> <b>ReactNews</b>
              </Link>
              <button className="navbar-toggler toggler-btn" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse col-lg-10" id="navbar">
              <div className="col-lg-10 container-fluid row">
                <Link to="/" className="col-lg-1">Home</Link>
                <Link to="/signup" className="col-lg-1">SignUp</Link>
                <Link to="/signin" className="col-lg-1">SignIn</Link>
                <Link to="/profile" className="col-lg-1">Profile</Link>
                <Link to="/news" className="col-lg-1">News</Link>
                <Link to="/news" className="col-lg-3"></Link>
                <Link
                  className="col-lg-2"
                  value="sport"
                  onClick={
                    this.props.isCategoryNews !== undefined
                      ? () => this.props.handleRouter("sports")
                      : () => this.handleRouterNav("sports")
                  }
                >
                  Olah Raga
                </Link>
                <Link
                  className="col-md-2"
                  value="business"
                  onClick={
                    this.props.isCategoryNews !== undefined
                      ? () => this.props.handleRouter("business")
                      : () => this.handleRouterNav("business")
                  }
                >
                  Bisnis
                </Link>
                {/* <Search {...this.props} /> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;
