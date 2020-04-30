import React, { Component } from "react";

export default class CustomProviderInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = { value: "" };
  }
  handleChange(event) {
    this.props.customValueSetter(event.target.value);
    this.setState({ value: event.target.value });
    
  }

  render() {
    return (
      <div>
        <label>Your custom provider here:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
