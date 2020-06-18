import * as React from "react";
import {
  EditableFileModel,
  ImageFileModel,
  UnknownFileModel,
  VideoFileModel,
} from ".";
import Folder from "../components/folder/folderItem.component";
import { ExplorerItem, ItemMetadata } from "./ExplorerItem";

export class FolderModel implements ExplorerItem {
  type: string;
  metadata: ItemMetadata;
  name: string;
  parent: string;
  url: string;
  content: ExplorerItem[] = [];
  fullName: string;

  constructor(type: string, name: string, parent: string, url: string) {
    this.type = type;
    this.name = name;
    this.parent = parent;
    this.url = url;
    this.fullName = name;
  }
  renderItem(
    highlighted: boolean,
    clickHandler: () => void,
    dblClickHandler: () => void
  ): JSX.Element {
    return (
      <Folder
        key={this.url}
        highlight={highlighted}
        onClickHandler={clickHandler}
        onDblClickHandler={dblClickHandler}
        folder={this}
      ></Folder>
    );
  }
  setMetada(metadata: ItemMetadata) {
    this.metadata = metadata;
  }

  mapReduceContent() {
    let acumulator = {
      folder: { count: 0, image: "/img/icon/icon-files-folder.svg" },
      image: { count: 0, image: "/img/icon/icon-files-pic.svg" },
      editable: { count: 0, image: "/img/icon/icon-files-text.svg" },
      video: { count: 0, image: "/img/icon/icon-files-video.svg" },
      unknown: { count: 0, image: "/img/icon/icon-files-unknown.svg" },
    };
    for (let item of this.content) {
      if (item instanceof FolderModel) acumulator["folder"].count++;
      if (item instanceof ImageFileModel) acumulator["image"].count++;
      if (item instanceof EditableFileModel) acumulator["editable"].count++;
      if (item instanceof VideoFileModel) acumulator["video"].count++;
      if (item instanceof UnknownFileModel) acumulator["unknown"].count++;
    }
    return acumulator;
  }
}
