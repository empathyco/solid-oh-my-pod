import React from "react";
import { NavLink } from "react-router-dom";
import { Item, Label } from "./navigation.style";

type Props = {
  navigation: Object,
};

const Navigation = ({ navigation }: Props) => (
  <nav role="navigation" className="nav nav__primary">
    <ul>
      {navigation &&
        navigation.map((item) => (
          <Item key={item.id} data-testid="item">
            <NavLink to={item.to} activeClassName="active" className="nav-link">
              <span className="icon">
                <img
                  src={item.icon}
                  alt={item.id}
                  className="nav-icon"
                  style={{
                    width: "34px",
                    height: "34px",
                    marginTop: "4px",
                    maxHeight: "none",
                  }}
                />
              </span>
              <Label className="label">{item.label}</Label>
            </NavLink>
          </Item>
        ))}
    </ul>
  </nav>
);

export default Navigation;
