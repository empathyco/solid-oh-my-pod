// @flow
import React from "react";
import Select, { components } from "react-select";


import { Item, Icon, ItemText } from "./styled.components";


const Option = ({ innerProps, isDisabled, innerRef, data }) =>
  !isDisabled ? (
    <Item ref={innerRef} {...innerProps} className="option">
      {data.image ? (
        <Icon src={data.image} className="icon" alt="provider" />
      ) : null}
      <ItemText>{data.label}</ItemText>
    </Item>
  ) : null;

const SingleValue = ({ data, ...props }) => {
  return (
    <components.SingleValue {...props} className="selected">
      {data.image ? (
        <Icon src={data.image} className="icon" alt="single_provider" />
      ) : null}
      <ItemText>{data.label}</ItemText>
    </components.SingleValue>
  );
};

const ProviderSelect = (props) => {
  const { className, placeholder, options, components, onChange } = props;
  return (
    <Select
      {...{
        placeholder,
        className: `solid-provider-select ${className || ""}`,
        options,
        isSearchable: false,
        components: components && { Option, SingleValue },
        onChange,
      }}
    />
  );
};

export default ProviderSelect;
