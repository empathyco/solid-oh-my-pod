import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TextButton } from "../mainButtons";
import { ImageContainer } from "./buttonWithImage.style";

type Props = {
  onClick?: () => void;
  icon: string;
  label: string;
  useCustomIcon?: boolean;
  color?: "main" | "error" | "success" | "info";
  style?: {};
  className?: string;
};
const ButtonWithImage = (props: Props) => {
  console.log("PROOOOPS", props);
  let newStyle = {
    ...props.style,
    ...{ display: "flex", alignContent: "center" },
  };
  console.log("STYLE", newStyle);
  return (
    <TextButton
      action={props.onClick}
      label={props.label}
      color={props.color ? props.color : "main"}
      style={newStyle}
      className={props.className}
    >
      <ImageContainer>
        {props.useCustomIcon ? (
          <img src={props.icon.toString()} alt={props.label.toLowerCase()} />
        ) : (
          <FontAwesomeIcon icon={props.icon as IconProp}></FontAwesomeIcon>
        )}
      </ImageContainer>
    </TextButton>
  );
};

export default ButtonWithImage;
