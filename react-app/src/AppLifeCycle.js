import React from "react";

class AppLifeCycle extends React.Component {
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
    console.log("props App", this.props);
    console.log("state App", this.state);
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <button onClick={this.setDouble}>DOUBLE</button>
        <Content myNumber={this.state.data} />
        <div>Double: {this.state.double}</div>
      </div>
    );
  }
}
class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }
  render() {
    console.log("props Content", this.props);
    console.log("state Content", this.state);
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export default AppLifeCycle;
