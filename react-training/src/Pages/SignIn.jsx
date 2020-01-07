import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Navigation from "../Component/navigation";

class SignIn extends Component {
  state = { namaPengguna: "", kataKunci: "" };

  changeInput = e => {
    console.warn("cek event target", e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  postLogin = () => {
    const { namaPengguna, kataKunci } = this.state;
    const data = {
      username: namaPengguna,
      password: kataKunci
    };
    const self = this;
    axios
      .post("https://atareact.free.beeceptor.com/auth", data)
      .then(function(response) {
        console.log(response.data);
        if (response.data.hasOwnProperty("api_key")) {
          localStorage.setItem("api_key", response.data.api_key);
          localStorage.setItem("is_login", true);
          localStorage.setItem("full_name", response.data.full_name);
          localStorage.setItem("email", response.data.email);
          self.props.history.push("/profile");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log("state", this.state);
    return (
      <React.Fragment>
        <Navigation {...this.props} />
        <section className="content signin">
          <form onSubmit={e => e.preventDefault()}>
            <h4>SignIn</h4>
            <div>
              <input
                type="text"
                name="namaPengguna"
                placeholder="Username"
                onChange={e => this.changeInput(e)}
              />
            </div>
            <div>
              <input
                type="password"
                name="kataKunci"
                placeholder="Password"
                onChange={e => this.changeInput(e)}
              />
            </div>
            <button
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "red",
                color: "white"
              }}
              onClick={() => this.postLogin()}
            >
              SignIn
            </button>
            <button
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "red",
                color: "white"
              }}
              type="reset"
            >
              Reset
            </button>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(SignIn);
