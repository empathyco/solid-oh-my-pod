import { ProviderSelector, TextButton } from "components/Utils";
import React, { Component, Fragment } from "react";
import { Provider } from "services";
import {
  AlreadyHaveAccountMessage,
  Container,
  ErrorMessage,
  FAQButton,
  ProviderSigup,
  Shape,
  Title,
  Boy,
  Star1,
  Star2,
  Ceiling,
  Mote,
} from "./signUp.Style";
type State = {
  selectedProvider: string;
  error: string | undefined;
  useCustomProvider: boolean;
};
type Props = {
  renderRightComponent: (component: JSX.Element) => void;
  highlightColor: string;
  renderPage: (page: number) => void;
};
export default class SignUpPage extends Component<Props, State> {
  providers: any;
  constructor(props: Props) {
    super(props);
    this.providers = Provider.getIdentityProviders();
    this.state = {
      selectedProvider: this.providers[0].value,
      error: undefined,
      useCustomProvider: false,
    };
  }
  onProviderSelect = (provider: string, custom: boolean) => {
    this.setState({
      selectedProvider: provider,
      useCustomProvider: custom,
      error: undefined,
    });
  };
  renderRightComponent() {
    this.props.renderRightComponent(
      <Fragment>
        <ProviderSigup>
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
            label="Sign up"
            color="main"
            action={() => this.goRegister()}
          ></TextButton>
        </ProviderSigup>
        <AlreadyHaveAccountMessage
          style={{ color: this.props.highlightColor }}
          onClick={() => this.props.renderPage(0)}
        >
          Already have an account?
        </AlreadyHaveAccountMessage>
      </Fragment>
    );
  }
  goRegister(): void {
    window.location.href = `${this.state.selectedProvider}`;
  }
  componentDidMount() {
    this.renderRightComponent();
  }
  render() {
    return (
      <Container>
        <div className="content">
          <Title src="/img/faq/ohmypod-white.svg" alt="title"></Title>
          <h3 className="subtitle">Are you new?</h3>
          <h3 className="subtitle">Dont't worry about it!</h3>
          <p>You have questions?</p>
          <FAQButton onClick={() => this.props.renderPage(2)}>FAQ</FAQButton>
        </div>
        <Boy src="/img/faq/boy1.svg" alt="boy"></Boy>
        <Star1 src="/img/faq/star1.svg" alt="star1"></Star1>
        <Star2 src="/img/faq/star2.svg" alt="star2"></Star2>
        <Ceiling src="/img/faq/star-ceiling.svg" alt="star ceiling"></Ceiling>
        <Mote src="/img/faq/mote.svg" alt="mote"></Mote>

        <Shape src="/img/faq/shape1.svg" alt="shape"></Shape>
      </Container>
    );
  }
}
