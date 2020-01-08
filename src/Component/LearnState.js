import React from "react";
import Content from "./Stateless"

class LearnState extends React.Component {
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
  doReset = () => {
    this.setState({
      data: 0,
      double: 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber} className="btn btn-warning">INCREMENT</button>
        <button onClick={this.setDouble} className="btn btn-warning">DOUBLE</button>
        <Content myNumber={this.state.data} doReset={this.doReset} />
        {/* <button onClick={this.doReset}>Reset</button> */}
        <div>Double: {this.state.double}</div>
      </div>
    );
  }
}
export default LearnState;
