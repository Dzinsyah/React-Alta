import React from "react";
import Content from "./StateContent"

// Stateful component 
class StateCheck extends React.Component {
  state = {
    data: 0,
    double: 1
  };
  setNewNumber = () => {
    this.setState({ data: this.state.data + 1 });
  };
  setDouble = () => {
    this.setState({ double: this.state.double * 2 });
  };

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <button onClick={this.setDouble}>DOUBLE</button>
        <Content myNumber={this.state.data} reSet={this.reSet} />
        <div>Double: {this.state.double}</div>
      </div>
    );
  }
}

export default StateCheck;
