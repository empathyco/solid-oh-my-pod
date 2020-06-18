import React, { Component, Fragment } from "react";
import { fileExplorerService } from "services";
import { RouteContainer, RoutePart, Separator } from "./route.style";

type Props = {
  url: string;
  clickHandler: (url: string) => void;
  homeTranslation: string;
};
type State = { parts: { name: string; url: string }[] };
export default class Route extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      parts: [],
    };
  }

  async componentDidMount() {
    if (this.props.url !== "") {
      await this.setState({
        parts: await this.getRoute(this.props.url),
      });
    }
  }

  async componentWillReceiveProps(newProps: Props) {
    if (newProps.url !== "") {
      await this.setState({
        parts: await this.getRoute(newProps.url),
      });
    }
  }

  async getRoute(url) {
    //Set base root "home"
    let newRoute: { name: string; url: string }[] = [];
    newRoute.push({
      name: this.props.homeTranslation,
      url: await fileExplorerService.getRoot(),
    });

    //Get rid of protocol
    let routeParts = url.split("//")[1].split("/");

    for (var i = 1; i < routeParts.length; i++) {
      if (routeParts[i] !== "") {
        let url = "https://" + routeParts[0] + "/";
        for (var j = 1; j <= i; j++) {
          url += routeParts[j] + "/";
        }

        let part = {
          name: routeParts[i],
          url: url,
        };
        newRoute.push(part);
      }
    }
    return newRoute;
  }

  render() {
    let routeParts = this.state.parts.map((part, index) => {
      return (
        <Fragment key={index}>
          {index !== 0 && <Separator>/</Separator>}
          <RoutePart
            key={part.url}
            onClick={() => this.props.clickHandler(part.url)}
          >
            {part.name}
          </RoutePart>
        </Fragment>
      );
    });
    return <RouteContainer>{routeParts}</RouteContainer>;
  }
}
