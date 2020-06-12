import { ContainerHeader } from "components";
import * as React from "react";
import { Component } from "react";
import { WithTranslation } from "react-i18next";
import FileExplorerComponent from "./components/fileExplorer";
import { FileExplorerWrapper } from "./fileExplorer.container.style";

interface Props extends WithTranslation {
  webId: string;
}
export default class FileExplorerContainer extends Component<Props> {
  render() {
    const { t } = this.props;
    let title = t("fileexplorer.title");
    return (
      <FileExplorerWrapper>
        <ContainerHeader {...{ title }}></ContainerHeader>
        <FileExplorerComponent></FileExplorerComponent>
      </FileExplorerWrapper>
    );
  }
}
