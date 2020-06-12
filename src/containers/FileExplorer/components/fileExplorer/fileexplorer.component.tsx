import { LoaderService, UserInformation } from "components";
import React, { Component } from "react";
import { WithTranslation } from "react-i18next";
import { fileExplorerService } from "services";
import { ExplorerItem } from "../../models/ExplorerItem";
import { FolderModel } from "../../models/FolderModel";
import Route from "../route/route.component";
import { Content, Explorer, FileExplorer } from "./fileexplorer.style";
import FolderItemsCountComponent from "./folderItemsCount";
import SearchBarComponent from "./searchbar";

interface Props extends WithTranslation {}
type State = {
  url: string;
  folder: FolderModel | null;
  previousRoute: string;
  selectedResource: ExplorerItem | null;
  searchInputValue: string;
};
export default class FileExplorerComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      url: "",
      folder: null,
      previousRoute: "",
      selectedResource: null,
      searchInputValue: "",
    };
  }

  async componentDidMount() {
    LoaderService.nowLoading();

    let rootUrl = await fileExplorerService.getRoot();
    let rootFolder = await fileExplorerService.loadFolder(rootUrl);

    await this.setState({
      url: rootUrl,
      folder: rootFolder,
      previousRoute: rootFolder.url,
    });

    LoaderService.completeLoad();
  }

  changeCurrentFolder = async (item: ExplorerItem) => {
    let prev = this.state.url;
    LoaderService.nowLoading();
    await this.setState({
      url: item.url,
      folder: await fileExplorerService.loadFolder(item.url),
      previousRoute: prev,
    });
    (this.refs.searchBar as SearchBarComponent).clean();
    LoaderService.completeLoad();
  };

  async breadCrumbClick(url: string) {
    let folder = await fileExplorerService.loadFolder(url);
    this.changeCurrentFolder(folder);
  }

  handleClick = (item: ExplorerItem) => {
    this.setState({
      selectedResource: item,
    });
  };

  handleSearchChange = (value: string) => {
    this.setState({ searchInputValue: value });
  };
  render() {
    let { t } = this.props;
    let elements = this.state.folder
      ? this.state.folder.content
          .filter((item) => item.fullName.includes(this.state.searchInputValue))
          .map((item) =>
            item.renderItem(
              this.state.selectedResource === item,
              () => this.handleClick(item),
              () => this.changeCurrentFolder(item)
            )
          )
      : [];

    return (
      <Content>
        <UserInformation>
          <FolderItemsCountComponent
            accumulator={
              this.state.folder ? this.state.folder.mapReduceContent() : null
            }
          ></FolderItemsCountComponent>
        </UserInformation>
        <FileExplorer className="file-explorer">
          <SearchBarComponent
            ref="searchBar"
            onChange={this.handleSearchChange}
            placeholder={t("fileexplorer.search")}
          ></SearchBarComponent>
          <Route
            homeTranslation={t("fileexplorer.home")}
            url={this.state.url}
            clickHandler={(url: string) => this.breadCrumbClick(url)}
          />
          <Explorer className="explorer">
            <div className="fileitems">{elements} </div>
          </Explorer>
        </FileExplorer>
      </Content>
    );
  }
}
