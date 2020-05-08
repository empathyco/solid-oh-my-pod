import React, { Component } from "react";

import { Title, Header } from "./containerHeader.style";
class ContainerHeader extends Component {
  /**
   *
   * @param {webId,defaultProfilePhoto,title} props
   */
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Header>
        <Title className="floating-header-item">
          <h2>{this.props.title}</h2>
        </Title>
      </Header>
    );
  }
}

export default ContainerHeader;
