import React, { Component } from "react";
import { WithTranslation } from "react-i18next";

interface Props extends WithTranslation {
  customValueSetter: (value: string) => void;
}
type State = { value: string };
export default class CustomProviderInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = (event) => {
    this.props.customValueSetter(event.target.value);
    this.setState({ value: event.target.value });
  };

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
