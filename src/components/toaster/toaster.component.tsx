import * as React from "react";
import { Component } from "react";
import { OMPButton } from "../Utils/buttons/mainButtons";
import {
  ConfirmationScreen,
  ToasterPopUp,
  ToasterPopUpScreen,
} from "./toaster.style";
import ToasterService, { Confirmation, PopUp } from "./toasterService";

type Props = {};
type State = {
  popUp: PopUp | undefined;
  confirmationDialog: Confirmation | undefined;
};
export default class ToasterComponent extends Component<Props, State> {
  popUp: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = { popUp: undefined, confirmationDialog: undefined };
    this.popUp = React.createRef();

    ToasterService.subscribePopUp(this.updateState, this.updateConfirmation);
  }

  updateState = (state: State) => {
    this.setState(state);
  };
  updateConfirmation = (confirmation: Confirmation) => {
    this.setState({ confirmationDialog: confirmation });
  };

  handleConfirmationAction(value: boolean) {
    if (this.popUp.current && this.state.confirmationDialog) {
      this.popUp.current.classList.add("close");
    }
    setTimeout(() => {
      this.setState({ confirmationDialog: undefined });
    }, 500);

    ToasterService.resolvePromise(value);
  }
  popUpAction = () => {
    if (this.state.popUp) this.state.popUp.onButtonClick();

    //fadeout animation
    if (this.popUp.current && this.state.popUp) {
      this.popUp.current.classList.remove(this.state.popUp.type);
      this.popUp.current.classList.add("closing-" + this.state.popUp.type);
    }
    setTimeout(() => {
      ToasterService.clearPopUp();
    }, 500);
  };

  render() {
    const { popUp, confirmationDialog } = this.state;

    return (
      <React.Fragment>
        {popUp && (
          <ToasterPopUpScreen>
            <ToasterPopUp ref={this.popUp} className={popUp.type}>
              <div className={"header " + popUp.type}>
                <img
                  src={`img/icon/toaster/${popUp.type}.svg`}
                  alt={popUp.type}
                />
                <h3>{popUp.title}</h3>
              </div>

              <div className="body">
                <div className="description">
                  <p>{popUp.subtitle}</p>
                </div>
                <OMPButton
                  className="popup-button"
                  action={() => this.popUpAction()}
                  color={popUp.type}
                  label={popUp.buttonLabel}
                ></OMPButton>
              </div>
            </ToasterPopUp>
          </ToasterPopUpScreen>
        )}
        {confirmationDialog && (
          <ConfirmationScreen className="confirmation">
            <div className="confirmationPopUp open" ref={this.popUp}>
              <div className="head">
                <h3>{confirmationDialog.title}</h3>
              </div>

              <div className="body">
                <div className="description">
                  <p>{confirmationDialog.subtitle}</p>
                </div>

                <div className="buttons">
                  <OMPButton
                    className="popup-button"
                    action={() => this.handleConfirmationAction(false)}
                    color="error"
                    label={confirmationDialog.cancelLabel}
                  ></OMPButton>
                  <OMPButton
                    className="popup-button"
                    action={() => this.handleConfirmationAction(true)}
                    color="success"
                    label={confirmationDialog.accepLabel}
                  ></OMPButton>
                </div>
              </div>
            </div>
          </ConfirmationScreen>
        )}
      </React.Fragment>
    );
  }
}
