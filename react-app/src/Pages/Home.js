import React from "react";
// import '../styles/bootstrap.css';
// import '../styles/bootstrap.js';
import StateCheck from '../Components/StateDemo';
import ThemeSwitcher from '../Components/ThemeSwitcher';

const Home = props => {
  return (
    <section className="content">
      <h1 style={{ textalign: "center" }}>State Demo</h1>
      <StateCheck />
      <ThemeSwitcher />
    </section>
  );
};

export default Home;
