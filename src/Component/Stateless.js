import React from "react";

// Stateless dalam bentuk class
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3>{this.props.myNumber}</h3>
//                  <button onClick={this.props.doReset}>Reset</button>
//             </div>
//         );
//     }
// }

// Stateless dalam bentuk pure javascript/function
const Content = (props) => {
    return (
        <div style={{ borderWidth: "3px", border: "solid", paddingLeft: "20px", paddingBottom: "10px", marginTop: "20px", marginBottom: "10px" }}>
            <h3>{props.myNumber}</h3>
            <button onClick={props.doReset} className="btn btn-success">Reset</button>
        </div>
    );
}

export default Content;