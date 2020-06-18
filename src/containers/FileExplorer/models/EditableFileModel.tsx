import * as React from "react";
import { EditableFile } from "../components/files";
import { AbstractFileModel } from "./AbstractFileModel";

export class EditableFileModel extends AbstractFileModel {
  renderItem(
    highlighted: boolean,
    clickHandler: () => void,
    dblClickHandler?: () => void
  ): JSX.Element {
    return (
      <EditableFile
      key={this.url}
        file={this}
        highlight={highlighted}
        onClickHandler={clickHandler}
      ></EditableFile>
    );
  }
  constructor(
    type: string,
    name: string,
    extension: string,
    parent: string,
    url: string
  ) {
    super(type, name, extension, parent, url);
    this.fileType = "editable";
  }
}
