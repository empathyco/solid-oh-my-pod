import React from "react";
import { NavLink } from "react-router-dom";
import { Item, Label } from "./navigation.style";

const Navigation = ({ navigation, isMobile }) => (
  <nav role="navigation" className="nav nav__primary">
    <ul>
      {navigation &&
        navigation.map((item) => (
          <Item key={item.id} data-testid="item">
            <NavLink
              to={item.to}
              activeClassName="active"
              className={"nav-link " + (isMobile ? "mobile-link" : "")}
            >
              <Label className="label">{item.label}</Label>
            </NavLink>
          </Item>
        ))}
    </ul>
  </nav>
);

export default Navigation;
