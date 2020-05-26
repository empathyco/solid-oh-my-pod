import * as React from "react";
import { Component } from "react";
import ToasterService from "./toasterService";
import { PopUp } from "./toasterService";
import { ToasterPopUpScreen, ToasterPopUp } from "./toaster.style";
import OMPButton from "../Utils/buttons/mainButtons";

type Props = {};
type State = {
  popUp: PopUp | undefined;
};
export default class ToasterComponent extends Component<Props, State> {
  popUp: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.state = { popUp: undefined };
    this.popUp = React.createRef();
    ToasterService.subscribePopUp(this.updateState);
  }

 

  updateState = (state: State) => {
    this.setState(state);
  };

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
    const { popUp } = this.state;

    return (
      <React.Fragment>
        {popUp ? (
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
        ) : (
          undefined
        )}
        ;
      </React.Fragment>
    );
  }
}
