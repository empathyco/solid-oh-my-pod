import * as React from "react";
import { UnknownFile } from "../components/files";
import { AbstractFileModel } from "./AbstractFileModel";
export class UnknownFileModel extends AbstractFileModel {
  constructor(
    type: string,
    name: string,
    extension: string,
    parent: string,
    url: string
  ) {
    super(type, name, extension, parent, url);
    this.fileType = "unknown";
  }
  renderItem(highlighted: boolean, clickHandler: () => void,
  dblClickHandler?: () => void): JSX.Element {
    return (
      <UnknownFile
      key={this.url}
        file={this}
        highlight={highlighted}
        onClickHandler={clickHandler}
      ></UnknownFile>
    );
  }
}
