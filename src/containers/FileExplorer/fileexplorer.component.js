import { fileExplorerService } from "@services";
import { LoaderService } from "components";
import React, { Component } from "react";
import {
  AudioFile,
  EditableFile,
  ImageFile,
  UnknownFile,
  VideoFile,
} from "./components/files";
import Folder from "./components/folder/folderItem.component";
import Route from "./components/route/route.component";
import { Explorer, ExplorerContainer } from "./fileexplorer.style";

export default class FileExplorerComponent extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      folder: [],
      // route: [],
      previousRoute: "",
      selectedResource: null,
    };
    this.changeRoot = this.changeRoot.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    LoaderService.nowLoading();
    let publicRoot = await fileExplorerService.getRoot();
    await this.setState({
      url: publicRoot,
      folder: await fileExplorerService.getFolderContent(publicRoot),
      // route: await this.getRoute(publicRoot)
    });

    LoaderService.completeLoad();
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.state.url === nextState.url){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }

  async changeRoot(event) {
    let prev = this.state.url;
    const { id } = event.target;
    await this.setState({
      url: id,
      folder: await fileExplorerService.getFolderContent(id),
      previousRoute: prev,
    });
    this.forceUpdate();
  }

  async handleClick(event) {
    const { id } = event.target;
    await this.setState({
      selectedResource: id,
    });
    this.forceUpdate();
  }

  /* jshint ignore:start */
  render() {
    let folders = null;

    if (this.state.folder.folders !== undefined) {
      folders = this.state.folder.folders.map((file) => {
        return (
          <Folder
            folder={file}
            dblClick={this.changeRoot}
            click={this.handleClick}
            highlight={this.state.selectedResource === file.url ? "active" : ""}
          />
        );
      });
    }

    let archives = null;

    if (this.state.folder.files !== undefined) {
      archives = this.state.folder.files.map((file) => {
        return file.ctype === "editable" ? (
          <EditableFile
            file={file}
            highlight={this.state.selectedResource === file.url ? "active" : ""}
            click={this.handleClick}
          />
        ) : file.ctype === "audio" ? (
          <AudioFile
            file={file}
            highlight={this.state.selectedResource === file.url ? "active" : ""}
            click={this.handleClick}
          />
        ) : file.ctype === "image" ? (
          <ImageFile
            file={file}
            highlight={this.state.selectedResource === file.url ? "active" : ""}
            click={this.handleClick}
          />
        ) : file.ctype === "video" ? (
          <VideoFile
            file={file}
            highlight={this.state.selectedResource === file.url ? "active" : ""}
            click={this.handleClick}
          />
        ) : (
          <UnknownFile
            file={file}
            highlight={this.state.selectedResource === file.url ? "active" : ""}
            click={this.handleClick}
          />
        );
      });
    }

    let files = null;
    if (folders !== null && archives !== null) {
      files = [...folders, ...archives];
    }

    return (
      <ExplorerContainer>
        <Route url={this.state.url} click={this.changeRoot} />
        <Explorer>
          {" "}
          <div class="fileitems">{files} </div>
        </Explorer>
      </ExplorerContainer>
    );
  }
  /* jshint ignore:end */
}
