import * as React from "react";
import { Delete } from "./buttons.style";
export const DeleteButton = (props: { onClick: () => void; tooltip: string }) => {
  return (
    <Delete title={props.tooltip} onClick={props.onClick}>
      X
    </Delete>
  );
};
