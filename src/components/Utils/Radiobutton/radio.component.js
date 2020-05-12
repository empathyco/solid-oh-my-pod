import React from 'react';



const RadioButton = (props) => {
  const { label, onChange, name, id, checked, value } = props;
  return (
    <label className="radio" htmlFor={id}>
      <input type="radio" id={id} name={name} checked={checked} onChange={onChange} value={value} />
      {label}
    </label>
  );
};

export default RadioButton;
