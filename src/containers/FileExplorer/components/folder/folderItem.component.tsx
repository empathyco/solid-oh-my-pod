import { FolderModel } from "@containers/FileExplorer/models";
import React, { Component } from "react";
import { FileMenuTrigger } from "../files/fileItem.style";
import { FolderInfo } from "./folderItem.style";
type Props = {
  folder: FolderModel;
  highlight: boolean;
  onClickHandler: () => void;
  onDblClickHandler: () => void;
};
export default class Folder extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.class = nextProps.highlight;
  //   this.name = nextProps.folder.name;
  //   this.path = nextProps.folder.url;
  //   this.size = nextProps.folder.size;
  // }

  render() {
    const { highlight, folder, onClickHandler, onDblClickHandler } = this.props;
    return (
      <FileMenuTrigger
        className={highlight ? "active" : ""}
        onDoubleClick={onDblClickHandler}
        onClick={onClickHandler}
      >
        <img
          src="/img/icon/icon-files-folder.svg"
          className="imgfile"
          alt="folder"
        />
        <FolderInfo>
          <h2>{folder.name}</h2>
        </FolderInfo>
      </FileMenuTrigger>
    );
  }
}
