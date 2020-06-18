export interface ExplorerItem {
  metadata: ItemMetadata;
  type: string;
  url: string;
  fullName: string;
  /**
   * Renders the element  */
  renderItem(
    highlighted: boolean,
    clickHandler: () => void,
    dblClickHandler?: () => void
  ): JSX.Element;

  setMetada(metadata: ItemMetadata);
}

export type ItemMetadata = {
  creationTime: Date;
  lastModified: Date;
};
