import * as React from "react";
import { LoaderScreen, LoaderWrapper } from "./loader.style";
import { LoaderService } from "./loaderService";

type Props = {};
type State = { isLoading: boolean };
export default class LoaderComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false };
    LoaderService.subscribeToService(this.updateState);
  }

  updateState = (isLoading: boolean) => {
    this.setState({ isLoading: isLoading });
  };

  render() {
    const { isLoading } = this.state;

    return (
      <React.Fragment>

        {isLoading ? (
          <LoaderScreen>
            <LoaderWrapper>
              <img
                className="outer-loader"
                src="img/icon/loader/loader-outter.svg"
                alt="outer-loader"
              />

              <img
                className="inner-loader"
                src="img/icon/loader/loader-inner.svg"
                alt="inner-loader"
              />
            </LoaderWrapper>
          </LoaderScreen>
        ) : (
          undefined
        )}
      </React.Fragment>
    );
  }
}
