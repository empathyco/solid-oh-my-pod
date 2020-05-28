import * as React from "react";
import { Component } from "react";
import AboutPage from "./aboutPage";
import { FAQ, PageNavigation, PageNavigationItem } from "./faq.style";
import FAQPage from "./faqPage";

type Props = {};
type State = {
  selectedPage: number;
  rightComponent: JSX.Element | undefined;
};
export default class FAQComponent extends Component<Props, State> {
  pages: {
    sectionName: string;
    component: React.ReactNode;
    bgColor: string;
  }[];

  constructor(props) {
    super(props);
    this.initPages();
    this.state = { selectedPage: 0, rightComponent: undefined };
  }

  initPages() {
    this.pages = [
      // { sectionName: "SIGN IN", component: <h1>Section 1</h1> },
      // { sectionName: "SIGN UP", component: <h1>Section 2</h1> },
      {
        sectionName: "FAQ",
        component: (
          <FAQPage
            renderRightComponent={this.renderRightComponent}
            highlightColor="var(--darkish-pink)"
          ></FAQPage>
        ),
        bgColor: "var(--darkish-pink)",
      },
      {
        sectionName: "ABOUT",
        component: (
          <AboutPage
            renderRightComponent={this.renderRightComponent}
            highlightColor="var(--dark-peach)"
          ></AboutPage>
        ),
        bgColor: "var(--dark-peach)",
      },
    ];
  }

  renderPage(pageIndex: number) {
    this.setState({
      selectedPage: pageIndex,
      rightComponent: undefined,
    });
  }

  renderSectionNavigation() {
    return (
      <PageNavigation>
        {this.pages.map((page, index) => (
          <PageNavigationItem
            className={this.state.selectedPage === index ? "active" : ""}
            onClick={() => this.renderPage(index)}
          >
            <h3>{page.sectionName}</h3>
          </PageNavigationItem>
        ))}
      </PageNavigation>
    );
  }

  renderRightComponent = (component: JSX.Element) => {
    this.setState({ rightComponent: component });
  };

  closeRightComponent = () => {
    this.setState({ rightComponent: undefined });
  };
  render() {
    if (this.pages) {
      const leftComponent = this.pages[this.state.selectedPage].component;
      const { rightComponent } = this.state;
      const color = this.pages[this.state.selectedPage].bgColor;
      return (
        <FAQ>
          <div className="left" style={{ backgroundColor: color }}>
            {this.renderSectionNavigation()}
            {leftComponent}
          </div>
          {rightComponent && (
            <div className="right">
              <div
                className="closeButton"
                onClick={() => this.closeRightComponent()}
              >
                X
              </div>
              {rightComponent}
            </div>
          )}
        </FAQ>
      );
    } else return <React.Fragment></React.Fragment>;
  }
}
