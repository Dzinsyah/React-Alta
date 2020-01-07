import React from "react";

// Stateless component 
class Content extends React.Component {
    render() {
        return (
            <div style={{ border: "solid", borderWidth: "2px", marginTop: "10px", paddingLeft: "10px", paddingBottom: "10px" }}>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default Content;
