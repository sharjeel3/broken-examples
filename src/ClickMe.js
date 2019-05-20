import React, { Component } from "react";

export default class ClickMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = function() {
      this.setState({
        count: this.state.count + 1
      });
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
