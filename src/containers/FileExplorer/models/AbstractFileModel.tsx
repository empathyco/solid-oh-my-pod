import { ExplorerItem, ItemMetadata } from "./ExplorerItem";
export abstract class AbstractFileModel implements ExplorerItem {
  metadata: ItemMetadata;
  fileType: FileType;

  extension: string;
  parent: string;
  url: string;
  name: string;
  type: string;
  constructor(
    type: string,
    name: string,
    extension: string,
    parent: string,
    url: string
  ) {
    this.type = type;
    this.name = name;
    this.extension = extension;
    this.parent = parent;
    this.url = url;
    this.fullName=name+(extension?("."+extension):"");
  }
  fullName: string;

  setMetada(metadata: ItemMetadata) {
    this.metadata = metadata;
  }

  abstract renderItem(
    highlighted: boolean,
    clickHandler: () => void,
    dblClickHandler?: () => void
  ): JSX.Element;
}

type FileType = "unknown" | "image" | "video" | "editable";
