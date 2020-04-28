import React, { Component, useEffect } from "react";
import auth from "solid-auth-client";
// In-house Components
import LoginForm from "./children/Form";
// Utils
import { SolidError } from "@utils";
// Entities
import { Provider } from "../../../entities";

import SolidImg from "../../../images/Solid.png";
import InruptImg from "../../../images/logo.svg";
import SolidwebImg from "../../../images/Solid.png";
import SolidAuthingImg from "../../../images/Solid.png";

type Props = {
  providers?: Array<Provider>,
  callbackUri: String,
  selectPlaceholder?: String,
  inputPlaceholder?: String,
  formButtonText?: String,
  btnTxtWebId?: String,
  btnTxtProvider?: String,
  onError: (error: Error) => void,
  theme?: Object,
};

export default class LoginComponent extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      idp: null,
      withWebId: true,
      error: null,
      customValueInput:false
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    const { error } = state;
    if (error) {
      return {
        error: { ...error, message: props.errorsText[state.error.name] },
      };
    }
    return null;
  };

  componentDidUpdate(prevProps) {
    const { idp } = this.props;
    // Reset error state after user choose provider
    if (prevProps.idp !== "" && prevProps.idp !== idp) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ error: null });
    }
  }

  isWebIdValid = (webId) => {
    const regex = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)/,
      "i",
      "g",
      "A"
    );
    return regex.test(webId);
  };

  // eslint-disable-next-line consistent-return
  goLogin = async (e: Event) => {
    try {
      e.preventDefault();

      const { idp, withWebId } = this.state;
      const { callbackUri, errorsText } = this.props;

      if (!idp) {
        const errorMessage = withWebId ? "emptyWebId" : "emptyProvider";
        // @TODO: better error handling will be here
        throw new SolidError(errorsText[errorMessage], errorMessage);
      }

      if (idp && withWebId && !this.isWebIdValid(idp)) {
        throw new SolidError(errorsText.webIdNotValid, "webIdNotValid");
        // TODO also IDP can be invalid
      }

      const session = await auth.login(idp, {
        callbackUri,
        storage: localStorage,
      });

      /**
       * This condition checks if the session is null or undefined, we can have those 2 kind of values in return
       * Null would be the validation for the non existing pod provider
       * undefined will be session doesn't existing and/or the request is still pending
       */
      if (!session && session === null) {
        throw new SolidError(errorsText.unknown, "unknown");
      }
      return session;
      // @TODO: better error handling will be here
    } catch (error) {
      const { onError } = this.props;
      // Error callback for custom error handling
      if (onError) {
        onError(error);
      }
      this.setState({ error });
    }
  };

  onProviderSelect = ($event: Event) => {
    if ($event.custom) {
     this.setState({customValueInput:true})
    
    } else {
      
      const idp = $event && $event.value;
      this.setState({ idp: idp || "", error: !idp,customValueInput:false });
    }
  };

  optionToggle = () =>
    this.setState((prevState) => ({
      withWebId: !prevState.withWebId,
      idp: "",
      error: null,
    }));

  onChangeInput = (e: Event) => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.isWebIdValid(e.target.value)) {
      this.setState({ error: null });
    }
  };

  setCustomIDP=(value)=>{
    if(this.state.customValueInput)
    console.log(value)
    this.setState((prevState)=>({
      withWebId: !prevState.withWebId,
      idp: value,
      error: null,
    }))
  }
  render() {
    const { error, withWebId } = this.state;
    const { theme } = this.props;
    return (
      <LoginForm
        ref={this.form}
        {...this.props}
        error={error}
        withWebId={withWebId}
        onSubmit={this.goLogin}
        optionToggle={this.optionToggle}
        onChangeInput={this.onChangeInput}
        onSelectChange={this.onProviderSelect}
        theme={theme}
        parentCallback={this.setCustomIDP}
      />
    );
  }
}

LoginComponent.defaultProps = {
  selectPlaceholder: "Select ID Provider",
  inputPlaceholder: "WebID",
  formButtonText: "Log In",
  btnTxtWebId: "Log In with WebId",
  btnTxtProvider: "Log In with Provider",
  errorsText: {
    unknown: "Something is wrong, please try again...",
    webIdNotValid: "WebID is not valid",
    emptyProvider: "Solid Provider is required",
    emptyWebId: "Valid WebID is required",
  },
  providers: [
    {
      label: "Inrupt",
      image: InruptImg,
      value: "https://inrupt.net/auth",
      registerLink: "https://inrupt.net/register",
      description: "This is a prototype implementation of a Solid server",
    },
    {
      label: "Solid Community",
      image: SolidImg,
      value: "https://solid.community",
      registerLink: "https://solid.community/register",
      description: "This is a prototype implementation of a Solid server",
    },
    {
      label: "Solid Web Prototype",
      image: SolidwebImg,
      value: "https://solidweb.org",
      registerLink: "https://solidweb.org/register",
      description: "This is a prototype implementation of a Solid server",
    },
    {
      label: "Solid Authing Prototype",
      image: SolidAuthingImg,
      value: "https://solid.authing.cn",
      registerLink: "https://solid.authing.cn/register",
      description: "This is a prototype implementation of a Solid server",
    },
    
  ],
  theme: {
    buttonLogin: "",
    inputLogin: "",
    linkButton: "",
  },
};
