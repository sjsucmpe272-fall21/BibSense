import React, { Component } from "react";

class HomeBackground extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("http://localhost:3000/images/backgroundHome.jpg")`,
          backgroundRepeat: "no-repeat",
          width: "100",
          height: "150px",
          backgroundSize: "cover",
          position: "relative",
          opacity: "0.9",
        }}
      ></div>
    );
  }
}
export default HomeBackground;