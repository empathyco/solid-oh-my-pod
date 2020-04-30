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
    const { t } = this.props;
    return (
      <div>
        <label>{t("login.customProviderLabel")}</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
