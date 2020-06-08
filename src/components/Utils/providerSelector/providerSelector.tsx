import { CustomProviderInput } from "components/Utils";
import * as React from "react";
import { Component } from "react";
import {
  Arrow,
  CurrentSelectedProvider,
  ProviderSelectorWrapper,
  ProvidersWrapper,
  SelectProvider,
} from "./providerSelector.style";

type Props = {
  providers: any;
  onProviderSelect: (provider: string, custom: boolean) => void;
};
type State = {
  selected: any;
  useCustom: boolean;
  open: boolean;
  customValue: string;
};
export default class ProviderSelector extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: props.providers[0],
      useCustom: false,
      open: false,
      customValue: "",
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  changeProvider = (provider) => {
    this.setState({ selected: provider, open: false, useCustom: false });
    this.props.onProviderSelect(provider.value, false);
  };

  setCustomProviderValue = (value: string) => {
    this.setState({ customValue: value });
    this.props.onProviderSelect(value, true);
  };

  render() {
    const { selected, open, useCustom } = this.state;
    return (
      <ProviderSelectorWrapper>
        <CurrentSelectedProvider>
          {!useCustom ? (
            <React.Fragment>
              <img src={selected.image} alt={selected.label} />
              <p>{selected.label}</p>
            </React.Fragment>
          ) : (
            <p style={{ margin: "auto" }}>other provider</p>
          )}
        </CurrentSelectedProvider>
        {open && (
          <ProvidersWrapper>
            {this.props.providers
              .filter((provider) => provider.label !== selected.label)
              .map((provider) => (
                <SelectProvider
                  key={provider.id}
                  onClick={() => this.changeProvider(provider)}
                >
                  <img src={provider.image} alt={provider.label} />
                  <p>{provider.label}</p>
                </SelectProvider>
              ))}
            <SelectProvider
              onClick={() => {
                this.setState({ selected: "", useCustom: true, open: false });
                this.props.onProviderSelect("", true);
              }}
            >
              <p style={{ margin: "auto" }}>other provider</p>
            </SelectProvider>
          </ProvidersWrapper>
        )}

        <Arrow
          className={open ? "open" : ""}
          src="./img/icon/down-arrow.svg"
          alt="open"
          onClick={this.toggleOpen}
        />

        {useCustom && (
          <CustomProviderInput
            customValueSetter={this.setCustomProviderValue}
          ></CustomProviderInput>
        )}
      </ProviderSelectorWrapper>
    );
  }
}
