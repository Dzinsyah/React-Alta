import React, { Component } from "react";
import Component1 from "../Component/component1";

const variableLuar = "ini variable yang mau di masukkan jsx";
// const ulang = [1, 2, 3, 4, 5];

class Page1 extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red", backgroundColor: "yellow" }}>Ini page 1</h1>
        <h2>{variableLuar}</h2>
        <Component1 />
        {/* {ulang.map(() => (
          <Component1 />
        ))} */}
      </div>
    );
  }
}

export default Page1;
