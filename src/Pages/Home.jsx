import React from "react";
import Navigation from "../Component/navigation";
import LearnState from '../Component/LearnState';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation {...this.props} />
        <section className="content" style={{ paddingTop: "120px" }}>
          <h1 style={{ textalign: "center" }}>Home - Learn statefull & stateless</h1>
          <LearnState />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
