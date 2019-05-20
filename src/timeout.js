import React, { Component } from "react";

export default class TimeoutTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "loading..."
    };
  }

  componentDidMount() {
    setTimeout(function() {
      this.updateGreeting("Hello Me");
    }, 4000);
  }

  updateGreeting(greeting) {
    this.setState({ greeting });
  }

  render() {
    return (
      <div className="me">
        <h1>Timeout Test</h1>
        {this.state.greeting}
      </div>
    );
  }
}
