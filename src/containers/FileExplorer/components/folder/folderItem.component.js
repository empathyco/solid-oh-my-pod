import React, { Component } from "react";
import { FolderMenuTrigger, FolderInfo } from "./folderItem.style";

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
        tabIndex="0"
      >
        <img src="/img/icon/icon-files-folder.svg" size="2x" class="imgfile" title={this.path} alt={this.path}id={this.path} />
        <FolderInfo id={this.path}>
          <h2 id={this.path}>{this.name}</h2>
        </FolderInfo>
      </FolderMenuTrigger>
    );
  }
}
