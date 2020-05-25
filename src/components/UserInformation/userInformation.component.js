import React, { Component } from "react";
import { Fragment } from "react";
import Image from "./Image";

import { ProfileName, Section, ImageContainer } from "./userInformation.style";
import { ldflexService } from "../../services";
import {OMPButton} from "components/Utils"
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
class UserInformation extends Component {
  /**
   *
   * @param {title,webId} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      chindren: props.chindren,
    };
  }

  async componentDidMount() {
    const webId = await ldflexService.getWebId();
    console.log("WEBID RECIVIDO", webId);
    this.setState({ webId: webId });
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
    const { webId } = this.state;
    return (
      <Section>
        <ImageContainer>
          <Image
            {...{
              webId,
            }}
          />
        </ImageContainer>

        {this.getProfileName()}

        {this.state.children}
      </Section>
    );
  }
}

export default UserInformation;
