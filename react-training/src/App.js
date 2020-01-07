import React, { Component } from "react";
// import Page1 from "./Pages/page1";
// import Page2 from "./Pages/page2";
// import Navigation from "./Component/navigation";
import MainRoute from "./Routes/MainRoute";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navigation /> */}
        <MainRoute />
      </div>
    );
  }
}

export default App;
