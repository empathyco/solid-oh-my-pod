import * as React from "react";
import { Wrapper } from "./folderItemsCount.style";
export const FolderItemsCountComponent = (props) => {

  return (
    <Wrapper className="item-count">
      {Object.keys(props.accumulator).map((key, index) => {
        if (props.accumulator[key].count == 0) return;
        return (
          <div className="item" key={key}>
            <img src={props.accumulator[key].image} alt="icon" />
            <p>{props.accumulator[key].count}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};
