import { ButtonWithImage, OMPButton } from "@components/Utils";
import { LoaderService, ToasterService, UserInformation } from "components";
import React, { Component } from "react";
import { WithTranslation } from "react-i18next";
import { fileExplorerService } from "services";
import { ExplorerItem } from "../../models/ExplorerItem";
import { FolderModel } from "../../models/FolderModel";
import Route from "../route/route.component";
import {
  Content,
  CreafileBackground,
  Explorer,
  FileExplorer,
} from "./fileexplorer.style";
import FolderItemsCountComponent from "./folderItemsCount";
import SearchBarComponent from "./searchbar";

interface Props extends WithTranslation {}
type State = {
  url: string;
  folder: FolderModel | null;
  previousRoute: string;
  selectedResource: ExplorerItem | null;
  searchInputValue: string;
  createItemPopUpOpen: {
    createHandler: (any) => void;
    type: "folder" | "file";
  } | null;
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
      createItemPopUpOpen: null,
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
  refreshFolder = async () => {
    await this.setState({
      url: this.state.url,
      folder: await fileExplorerService.loadFolder(this.state.url),
    });
  };

  handleClick = (item: ExplorerItem) => {
    this.setState({
      selectedResource: item,
    });
  };

  handleSearchChange = (value: string) => {
    this.setState({ searchInputValue: value });
  };

  handleCreateNewFile = () => {
    this.setState({
      createItemPopUpOpen: { createHandler: this.createFile, type: "file" },
    });
  };
  handleCreateFolder = () => {
    this.setState({
      createItemPopUpOpen: { createHandler: this.createFolder, type: "folder" },
    });
  };

  closePopUp = () => {
    this.setState({ createItemPopUpOpen: null });
  };

  createFolder = async (event) => {
    let name = event.target.elements[0].value;

    this.closePopUp();
    try {
      await fileExplorerService.createFolder(this.state.url, name);
      ToasterService.addPopUpToast({
        buttonLabel: "Yay",
        onButtonClick: () => {},
        subtitle: "",
        title: "Folder created",
        type: "success",
      });
      this.refreshFolder();
    } catch (e) {
      ToasterService.addPopUpToast({
        buttonLabel: "ok",
        onButtonClick: () => {},
        subtitle: "",
        title: "Folder could not be created :(",
        type: "error",
      });
    }
  };
  createFile = async (event) => {
    let name = event.target.elements[0].value;
    console.log("HEEEY");
    this.closePopUp();
    try {
      await fileExplorerService.createTextFile(name, this.state.url, "");
      ToasterService.addPopUpToast({
        buttonLabel: "Yay",
        onButtonClick: () => {},
        subtitle: "",
        title: "File created",
        type: "success",
      });
      this.refreshFolder();
    } catch (e) {
      ToasterService.addPopUpToast({
        buttonLabel: "ok",
        onButtonClick: () => {},
        subtitle: "",
        title: "File could not be created :(",
        type: "error",
      });
    }
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
          <ButtonWithImage
            {...{
              style: { margin: "0 auto" },
              onClick: this.handleCreateNewFile,
              icon: "/img/icon/add.svg",
              label: "CREATE FILE",
              useCustomIcon: true,
            }}
          ></ButtonWithImage>
          <ButtonWithImage
            {...{
              style: { margin: "0 auto" },
              onClick: this.handleCreateFolder,
              icon: "/img/icon/add.svg",
              label: "CREATE FOLDER",
              useCustomIcon: true,
            }}
          ></ButtonWithImage>
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

        {this.state.createItemPopUpOpen && (
          <CreafileBackground>
            <form
              className="createFilePopUp"
              onSubmit={this.state.createItemPopUpOpen.createHandler}
            >
              {this.state.createItemPopUpOpen.type === "file" ? (
                <h2>Give a name for the file</h2>
              ) : (
                <h2>Give a name for the folder</h2>
              )}
              <input type="text" id="fileName" name="fileName" autoFocus />
              <div className="popUpButtons">
                <OMPButton
                  {...{
                    type: "button",
                    action: this.closePopUp,
                    color: "error",
                    label: "cancel",
                  }}
                ></OMPButton>
                <OMPButton
                  {...{
                    type: "submit",
                    action: () => {},
                    color: "main",
                    label: `Create ${this.state.createItemPopUpOpen.type}`,
                  }}
                ></OMPButton>
              </div>
            </form>
          </CreafileBackground>
        )}
      </Content>
    );
  }
}
