import * as React from "react";
import { VideoFile } from "../components/files";
import { AbstractFileModel } from "./AbstractFileModel";
export class VideoFileModel extends AbstractFileModel {
  constructor(
    type: string,
    name: string,
    extension: string,
    parent: string,
    url: string
  ) {
    super(type, name, extension, parent, url);
    this.fileType = "video";
  }

  renderItem(
    highlighted: boolean,
    clickHandler: () => void,
    dblClickHandler?: () => void
  ): JSX.Element {
    return (
      <VideoFile
        key={this.url}
        file={this}
        highlight={highlighted}
        onClickHandler={clickHandler}
      ></VideoFile>
    );
  }
}
