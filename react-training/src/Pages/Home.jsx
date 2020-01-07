import React from "react";
import Navigation from "../Component/navigation";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation {...this.props} />
        <section className="content">
          <h1 style={{ textalign: "center" }}>Home</h1>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
