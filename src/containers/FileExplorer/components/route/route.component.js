import React, { Component } from "react";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { RouteContainer, RoutePart, RouteIcon } from "./route.style";
import { fileExplorerService } from "@services";

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    console.log(this.url);
    this.click = props.click;
    this.state = {
      parts: []
    };
  }

  async componentDidMount() {
    if (this.url !== "") {
      await this.setState({
        parts: await this.getRoute(this.url)
      });
    }
  }

  async componentWillReceiveProps(newProps) {
    this.url = newProps.url;
    if (this.url !== "") {
      await this.setState({
        parts: await this.getRoute(this.url)
      });
    }
    console.log(this.url);
    console.log(this.state);
  }

  async getRoute(url) {
    let route = url.split("//");
    route = route[1].split("/");
    let newRoute = [];
    newRoute.push({
      name: "home",
      url: await fileExplorerService.getRoot()
    });
    for (var i = 1; i < route.length; i++) {
      if (route[i] !== "") {
        let part = {};
        part.name = route[i];
        let url = "https://" + route[0] + "/";
        for (var j = 1; j <= i; j++) {
          url += route[j] + "/";
        }
        part.url = url;
        newRoute.push(part);
      }
    }
    return newRoute;
  }

  render() {
    let routeParts = this.state.parts.map(part => {
      return (
        <RoutePart id={part.url} onClick={this.click}>
          {part.name}/
        </RoutePart>
      );
    });
    return (
      <RouteContainer>
        <RouteIcon icon={faFolderOpen} size="2x" />
        {routeParts}
      </RouteContainer>
    );
  }
}
