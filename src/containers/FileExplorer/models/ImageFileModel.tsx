import * as React from "react";
import { ImageFile } from "../components/files";
import { AbstractFileModel } from "./AbstractFileModel";
export class ImageFileModel extends AbstractFileModel {
  constructor(
    type: string,
    name: string,
    extension: string,
    parent: string,
    url: string
  ) {
    super(type, name, extension, parent, url);
    this.fileType = "image";
  }
  renderItem(
    highlighted: boolean,
    clickHandler: () => void,
    dblClickHandler?: () => void
  ): JSX.Element {
    return (
      <ImageFile
      key={this.url}
        file={this}
        highlight={highlighted}
        onClickHandler={clickHandler}
      ></ImageFile>
    );
  }
}
