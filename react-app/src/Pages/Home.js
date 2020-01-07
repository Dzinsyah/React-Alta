import React from "react";
// import '../styles/bootstrap.css';
// import '../styles/bootstrap.js';
import AppLifeCycle from '../AppLifeCycle';
import ThemeSwitcher from '../Components/ThemeSwitcher';

const Home = props => {
  return (
    <section className="content">
      <h1 style={{ textalign: "center" }}>Home</h1>
      <AppLifeCycle />
      <ThemeSwitcher />
    </section>
  );
};

export default Home;
