import React, { Component } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { FileMenuTrigger, FileInfo, AwesomeIcon } from "./fileItem.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faVideo,
  faFile,
  faFileAudio
} from "@fortawesome/free-solid-svg-icons";

export default class File extends Component {
  constructor(props, state) {
    super();
    this.name = props.file.name;
    this.path = props.file.url;
    this.type = props.file.type;
    this.size = props.file.size;
    this.state = {
      isSelected: false
    };
    this.patterns = {
      editable: /\.(txt|diff?|patch|svg|asc|cnf|cfg|conf|html?|cfm|cgi|aspx?|ini|pl|py|md|css|cs|jsx?|jsp|log|htaccess|htpasswd|gitignore|gitattributes|env|json|atom|eml|rss|markdown|sql|xml|xslt?|sh|rb|as|bat|cmd|cob|for|ftn|frm|frx|inc|lisp|scm|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb|tmpl|lock|go|yml|yaml|tsv|lst|ttl)$/i,
      image: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
      media: /\.(mp3|ogg|wav|mp4|webm)$/i,
      video: /\.(mp4|webm|ogg)$/i,
      extractable: /\.(zip)$/i
    };
  }

 
  handleClick() {
    let prev = this.state.isSelected;
    this.setState({
      isSelected: !prev
    });
  }

  render() {
    let contextMenuOptions = null;
    let fileIcon = null;

    if (this.isVideo()) {
      fileIcon = <img src="/img/icon/icon-files-video.svg" size="2x" className="imgfile" alt="video" />;
    } else if (this.isImage()) {
      fileIcon = <img src="/img/icon/icon-files-pic.svg" size="2x" className="imgfile" alt="image" />;
    } else if (this.isMedia()) {
      fileIcon = <img src="/img/icon/icon-files-video.svg" size="2x" className="imgfile" alt="audio" />;
    } else {
      fileIcon = <img src="/img/icon/icon-files-folder.svg" size="2x" className="imgfile" alt="folder" />;
    }

    return (
      <FileMenuTrigger
        className={this.state.isSelected ? "active" : ""}
        id={`${this.name.concat("_context_menu")}`}
        onClick={() => this.handleClick()}
      >
        {fileIcon}
        <FileInfo>
          <h2>{this.name}</h2>
        </FileInfo>
      </FileMenuTrigger>
    );
  }
}
