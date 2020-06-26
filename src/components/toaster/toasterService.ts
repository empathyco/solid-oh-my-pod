export type PopUp = {
  type: "info" | "error" | "success";
  title: string;
  subtitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
};
export type Confirmation = {
  title: string;
  subtitle: string;
  accepLabel: string;
  cancelLabel: string;
};

export default class ToasterService {
  static instance: ToasterService;
  updateToast: any;
  updateConfirmation: any;
  confirmationPromise: (
    value?: boolean | PromiseLike<boolean> | undefined
  ) => void;
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

  public static async showConfirmationPopUp(confirmation: Confirmation) {
   
    let promise = new Promise<boolean>((resolve) => {
      this.getInstance().confirmationPromise = resolve;
    });
    this.getInstance().updateConfirmation(confirmation);
    return promise;
  }

  public static resolvePromise(value: boolean) {
    this.getInstance().confirmationPromise(value);
  }

  public static addPopUpToast(popUp: PopUp) {
    this.getInstance().setPopUp(popUp);
  }

  public static subscribePopUp(updateToast, updateConfirmation) {
    ToasterService.getInstance().updateToast = updateToast;
    ToasterService.getInstance().updateConfirmation = updateConfirmation;
  }

  public static clearPopUp() {
    this.getInstance().setPopUp(undefined);
  }

  private setPopUp(popUp: PopUp | undefined) {
    this.updateToast({ popUp: popUp });
  }
}
