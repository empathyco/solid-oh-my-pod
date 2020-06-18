import * as React from "react";
import { GeneralButton, TextButton } from "./buttons.style";

type Props = {
  label: string;
  color: "main" | "error" | "success" | "info";
  style?: any;
  action: (any?: any) => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};
const OMPButton = (props: Props) => {
  const { label, color, style, action, disabled, type } = props;

  return (
    <GeneralButton
      type={type}
      style={style}
      className={color ? color + " omp-button" : "main omp-button"}
      onClick={action}
      disabled={disabled}
    >
      {label}
    </GeneralButton>
  );
};

type TextButtonProps = {
  label: string;
  color: "main" | "error" | "success" | "info";
  style?: any;
  action?: () => void;
  disabled?: boolean;
  className?: string;
  children?: JSX.Element;
};

const TextButtonComponent = (props: TextButtonProps) => {
  return (
    <TextButton
      onClick={props.action ? props.action : undefined}
      className={
        (props.color ? props.color : "main") +
        (props.className ? props.className : "")
      }
      style={props.style}
      disabled={props.disabled}
    >
      {props.children}
      <p>{props.label}</p>
    </TextButton>
  );
};

export { OMPButton, TextButtonComponent as TextButton };
