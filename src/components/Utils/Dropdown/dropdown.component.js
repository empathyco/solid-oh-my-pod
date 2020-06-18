import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import enhanceWithClickOutside from "react-click-outside";
import {
  DropdownContainer,
  DropdownMain,
  DropdownItemContainer,
  Item,
} from "./dropdown.style";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleOpen = () => {
    const { open } = this.props;
    if (!open) this.setState((prevProps) => ({ open: !prevProps.open }));
  };

  handleClickOutside() {
    this.setState({ open: false });
  }

  renderIcon = (action) =>
    action.customIcon ? (
      <div className={`flag-icon flag-icon-${action.icon}`} />
    ) : (
      <FontAwesomeIcon icon={action.icon} className="checked icon" />
    );

  render() {
    const { actions, children, className, hover, open: openProp } = this.props;
    const { open } = this.state;

    return (
      <DropdownContainer
        className={className}
        onClick={this.toggleOpen}
        onMouseEnter={hover ? this.toggleOpen : null}
        onMouseLeave={hover ? this.toggleOpen : null}
      >
        <DropdownMain onClick={this.toggleOpen} data-testid="dropdownMain">
          {children}
        </DropdownMain>
        {(open || openProp) && (
          <DropdownItemContainer className="dropdownItem">
            <ul data-testid="list">
              {actions.map((action, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Item key={i} className="item">
                  <button onClick={action.onClick} type="button">
                    {action.icon && this.renderIcon(action)}
                    <span>{action.label}</span>
                  </button>
                </Item>
              ))}
            </ul>
          </DropdownItemContainer>
        )}
      </DropdownContainer>
    );
  }
}

Dropdown.defaultProps = {
  hover: false,
};

export default enhanceWithClickOutside(Dropdown);
