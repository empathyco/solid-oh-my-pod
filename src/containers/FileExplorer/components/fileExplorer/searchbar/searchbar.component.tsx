import * as React from "react";
import { Component } from "react";
import { PlaceholderIcon, SearchBar, Wrapper } from "./searchbar.style";

type Props = {
  onChange: (value: string) => void;
  placeholder: string;
};
type State = {
  currentValue: string;
};
export default class SearchBarComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentValue: "" };
  }

  clean = () => {

    this.changeValue("");

  };

  changeValue(value: string) {
    this.setState({ currentValue: value });
    this.props.onChange(value);
  }
  onChangeHandler = (event) => {
    let value = event.target.value;
    this.changeValue(value);
  };

  loseFocus = (event) => {
    if (event.key === "Escape") {
      event.target.blur();
      this.clean();
    }
  };
  render() {
    return (
      <Wrapper>
        <PlaceholderIcon
          src="/img/icon/search.svg"
          alt="icon"
        ></PlaceholderIcon>

        <SearchBar
          onKeyUp={this.loseFocus}
          onChange={this.onChangeHandler}
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.currentValue}
        ></SearchBar>
      </Wrapper>
    );
  }
}
