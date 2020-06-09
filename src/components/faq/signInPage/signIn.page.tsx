import { ProviderSelector, TextButton } from "components/Utils";
import React, { Component, Fragment } from "react";
import { Provider } from "services";
import auth from "solid-auth-client";
import { SolidError } from "utils";
import {
  Container,
  CreateAccountMessage,
  ErrorMessage,
  Girl,
  Note1,
  Note2,
  ProviderSigin,
  Shape,
  Title,
} from "./signIn.page.style";

type Props = {
  renderRightComponent: (component: JSX.Element) => void;
  highlightColor: string;
  renderPage: (page: number) => void;
};
type State = {
  selectedProvider: string;

  error: string | undefined;
  useCustomProvider: boolean;
};
export default class SignInPage extends Component<Props, State> {
  providers: any;
  errorsText = {
    unknown: "Something is wrong, please try again...",
    webIdNotValid: "WebID is not valid",
    emptyProvider: "Solid Provider is required",
    emptyWebId: "Valid WebID is required",
  };
  constructor(props: Props) {
    super(props);
    this.providers = Provider.getIdentityProviders();
    this.state = {
      selectedProvider: this.providers[0].value,

      error: undefined,
      useCustomProvider: false,
    };
  }

  componentDidMount() {
    this.renderRightComponent();
  }

  goLogin = async () => {
    try {
      const { selectedProvider } = this.state;
      let callbackUri = `${window.location.origin}/welcome`;

      if (!selectedProvider) {
        const errorMessage = "emptyProvider";
        throw new SolidError(this.errorsText[errorMessage], errorMessage);
      }

      if (!Provider.isWebIdValid(selectedProvider)) {
        throw new SolidError(this.errorsText.webIdNotValid, "webIdNotValid");
      }

      console.log("LLEGA AQUI");
      await auth.login(selectedProvider, {
        callbackUri,
        storage: localStorage,
      });
      //If it reaches here it is not working
      throw new SolidError(this.errorsText.webIdNotValid, "webIdNotValid");
    } catch (error) {
      if (error instanceof SolidError) {
        this.setState({ error: this.errorsText[(error as SolidError).name] });
      } else {
        // Error callback for custom error handling

        this.setState({ error: this.errorsText.unknown });
      }
    }
  };

  onProviderSelect = (provider: string, custom: boolean) => {
    this.setState({
      selectedProvider: provider,
      useCustomProvider: custom,
      error: undefined,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.error !== this.state.error) this.renderRightComponent();
  }

  renderRightComponent() {
    this.props.renderRightComponent(
      <Fragment>
        <ProviderSigin>
          <h2 style={{ color: this.props.highlightColor }}>
            Select your provider
          </h2>

          <ProviderSelector
            providers={this.providers}
            onProviderSelect={this.onProviderSelect}
          ></ProviderSelector>
          {this.state.error && <ErrorMessage>*{this.state.error}</ErrorMessage>}
          <TextButton
            style={{ margin: "auto", marginTop: "20px" }}
            label="Sign in"
            color="main"
            action={() => this.goLogin()}
          ></TextButton>
        </ProviderSigin>
        <CreateAccountMessage
          style={{ color: this.props.highlightColor }}
          onClick={() => this.props.renderPage(1)}
        >
          Don't have an account yet? Create one!
        </CreateAccountMessage>
      </Fragment>
    );
  }

  render() {
    return (
      <Container>
        <Title src="/img/faq/ohmypod-white.svg" alt="title"></Title>
        <h3 className="subtitle">Hey, friend!</h3>
        <Shape src="/img/faq/shape1.svg" alt="shape"></Shape>
        <Girl src="/img/faq/girl1.svg" alt="girl"></Girl>
        <Note1 src="/img/faq/note1.svg" alt="note1"></Note1>
        <Note2 src="/img/faq/note2.svg" alt="note2"></Note2>
      </Container>
    );
  }
}
