import { useState } from "react";

export type PopUp = {
  type: "info" | "error" | "success";
  title: string;
  subtitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
};
export default class ToasterService {
  static instance: ToasterService;
  updateState: any;
  public static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new ToasterService();
      return this.instance;
    }
  }

  public addToast(
    type: "info" | "error" | "success",
    title: string,
    subtitle: string,
    dismissTime = 6000
  ) {
    //TODO
  }

  public static addPopUpToast(popUp: PopUp) {
    this.getInstance().setPopUp(popUp);
  }

  public static subscribePopUp(updateState) {
    ToasterService.getInstance().updateState = updateState;
  }

  public static clearPopUp() {
    this.getInstance().setPopUp(undefined);
  }

  private setPopUp(popUp: PopUp | undefined) {
    this.updateState({ popUp: popUp });
  }
}
