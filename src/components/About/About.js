import React, { Component } from "react";
import Background from "./Background";

class About extends Component {
  render() {
    return (
      <div>
          <Background/>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4" color="black">
                About
                </h1>
            <p className="lead">......</p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
