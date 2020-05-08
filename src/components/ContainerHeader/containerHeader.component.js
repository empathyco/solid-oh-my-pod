import React, { Component } from "react";
import Image from "./Image";
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
    const { webId, defaultProfilePhoto } = this.props;
    return (
      <Header>
        <div className="floating-header-item">
          <Image 
            {...{
              webId,
              defaultProfilePhoto,
            }}
          />
        </div>
        <Title className="floating-header-item">
          <h2>{this.props.title}</h2>
        </Title>
      </Header>
    );
  }
}

export default ContainerHeader;
