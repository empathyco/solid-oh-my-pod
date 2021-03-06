import * as React from "react";
import { Component } from "react";
import {
  CloseButton,
  FAQ,
  PageNavigation,
  PageNavigationItem,
  PoweredByEmpathy,
} from "./faq.style";
import FAQPage from "./faqPage";
import SignInPage from "./signInPage";
import SignUpPage from "./signUpPage";

type Props = { isLogin: boolean; about: boolean; closeButton?: () => void };
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

  constructor(props: Props) {
    super(props);
    this.initPages(props.isLogin);
    this.state = { selectedPage: 0, rightComponent: undefined };
  }

  initPages(isLogin: boolean) {
    let loginPages = [
      {
        sectionName: "SIGN IN",
        component: (
          <SignInPage
            renderRightComponent={this.renderRightComponent}
            highlightColor="var(--greyblue)"
            renderPage={this.renderPage}
          ></SignInPage>
        ),
        bgColor: "var(--greyblue)",
      },
      {
        sectionName: "SIGN UP",
        component: (
          <SignUpPage
            renderRightComponent={this.renderRightComponent}
            highlightColor="var(--dark-peach)"
            renderPage={this.renderPage}
          ></SignUpPage>
        ),
        bgColor: "var(--dark-peach)",
      },
    ];
    this.pages = [
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
      // {
      //   sectionName: "ABOUT",
      //   component: (
      //     <AboutPage
      //       renderRightComponent={this.renderRightComponent}
      //       highlightColor="var(--pale-teal)"
      //     ></AboutPage>
      //   ),
      //   bgColor: "var(--pale-teal)",
      // },
    ];
    if (isLogin) this.pages = [...loginPages, ...this.pages];
  }

  renderPage = (pageIndex: number) => {
    console.log("rendering");
    if (this.state.selectedPage === pageIndex) return;
    this.setState({
      selectedPage: pageIndex,
      rightComponent: undefined,
    });
  };

  renderSectionNavigation() {
    return (
      <PageNavigation>
        {this.pages.map((page, index) => (
          <PageNavigationItem
            key={index}
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
            <PoweredByEmpathy>
              <img
                src="/img/faq/powered_by_empathy.svg"
                alt="powered by Empathy"
              />
            </PoweredByEmpathy>
          </div>
          {rightComponent && <div className="right">{rightComponent}</div>}
          {this.props.closeButton && (
            <CloseButton onClick={this.props.closeButton}>X</CloseButton>
          )}
        </FAQ>
      );
    } else return <React.Fragment></React.Fragment>;
  }
}
