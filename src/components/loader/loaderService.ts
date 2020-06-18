export class LoaderService {
  static instance: LoaderService;
  updateState;
  public static getInstace() {
    if (this.instance) return this.instance;
    else {
      this.instance = new LoaderService();
      return this.instance;
    }
  }

  public static subscribeToService(updateState) {
    LoaderService.getInstace().updateState = updateState;
  }
  public static nowLoading() {
    this.getInstace().updateState(true);
  }

  public static completeLoad() {
    this.getInstace().updateState(false);
  }
}
