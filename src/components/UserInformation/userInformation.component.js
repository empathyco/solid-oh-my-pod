import React, { Component } from "react";
import { Fragment } from "react";

import { ProfileName, Section } from "./userInformation.style";
class UserInformation extends Component {
  /**
   *
   * @param {title} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      chindren: props.chindren,
    };
  }

  componentWillReceiveProps({ title, children }) {
    this.setState({ ...this.state, title, children });
  }

  getProfileName() {
    const name = this.state.title;
    if (name) {
      let splitted = "";
      if (name) splitted = name.split(" ");

      return (
        <ProfileName>
          {splitted.map((word, index) => (
            <p key={index}>{word}</p>
          ))}
        </ProfileName>
      );
    } else {
      return;
    }
  }
  render() {
    return (
      <Section>
        {this.getProfileName()}
        {this.state.children}
      </Section>
    );
  }
}

export default UserInformation;
