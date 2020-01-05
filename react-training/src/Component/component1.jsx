import React, { Component } from "react";
import "../style/style.css";

class Componenet1 extends Component {
  callAlert = () => {
    alert("kamu berhasil klik button ini");
  };
  render() {
    return (
      <div>
        <h3 className="text-component">ini component 1</h3>
        <p>ini tag p di component 1 </p>
        <br />
        <button onClick={this.callAlert}>coba klik button ini</button>
      </div>
    );
  }
}

export default Componenet1;
