import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label, Button } from ".//buttonWithImage.style";
class ButtonWithImage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Button onClick={this.props.onClick ? this.props.onClick() : ""}>
        {this.props.useCustomIcon ? (
          <img src={this.props.icon} alt={this.props.label.toLowerCase()} />
        ) : (
          <FontAwesomeIcon icon={this.props.icon}></FontAwesomeIcon>
        )}

        <Label>{this.props.label}</Label>
      </Button>
    );
  }
}

export default ButtonWithImage;
