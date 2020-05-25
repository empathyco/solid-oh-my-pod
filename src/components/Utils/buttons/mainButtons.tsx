import * as React from "react";
import { Component } from "react";
import { GeneralButton } from "./buttons.style";

type Props = {
  label: string;
  color: "main" | "error" | "success" | "info";
  style: any;
  action: () => void;
  disabled: boolean;
};
const OMPButton = (props: Props) => {
  const { label, color, style, action, disabled } = props;

  return (
    <GeneralButton
      style={style}
      className={color ? color : "main"}
      onClick={action}
      disabled={disabled ? disabled : false}
    >
      {label}
    </GeneralButton>
  );
};

export default OMPButton;
