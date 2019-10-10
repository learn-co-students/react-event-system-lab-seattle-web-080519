// Code EyesOnMe Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {
  render() {
    return (
      <div>
        <button
          onFocus={event => console.log("Good!")}
          onBlur={event => console.log("Hey! Eyes on me!")}
        >
          I'm a Button
        </button>
      </div>
    );
  }
}
