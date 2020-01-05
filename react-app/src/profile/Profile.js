import React from "react";
import { Redirect } from "react-router-dom";

const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const email = localStorage.getItem("email");
  const full_name = localStorage.getItem("full_name");
  console.log("is_login", is_login);

  if (is_login === null) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <section className="content">
        <h1
          style={{
            textalign: "center"
          }}>
          Profile
        </h1>
        <p>
          <label>Email:</label> {email}
        </p>
        <p>
          <label>Full Name:</label> {full_name}
        </p>
      </section>
    );
  }
};

export default Profile;
