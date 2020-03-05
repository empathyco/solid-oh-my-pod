import React, { Component } from "react";
import { FolderMenuTrigger, FolderInfo, AwesomeIcon } from "./folderItem.style";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

export default class Folder extends Component {
  constructor(props) {
    super(props);
    this.class = props.highlight;
    this.name = props.folder.name;
    this.path = props.folder.url;
    this.size = props.folder.size;
    this.dblclick = props.dblClick;
    this.click = props.click;
  }

  componentWillReceiveProps(nextProps) {
    this.class = nextProps.highlight;
    this.name = nextProps.folder.name;
    this.path = nextProps.folder.url;
    this.size = nextProps.folder.size;
  }

  render() {
    return (
      <FolderMenuTrigger
        className={this.class}
        id={this.path}
        onDoubleClick = {this.dblclick}
        onClick={this.click}
      >
        <AwesomeIcon icon={faFolder} size="2x" id={this.path} />
        <FolderInfo id={this.path}>
          <h2 id={this.path}>{this.name}</h2>
        </FolderInfo>
      </FolderMenuTrigger>
    );
  }
}
