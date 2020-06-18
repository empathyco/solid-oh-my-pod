import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Item, ProviderItemStyle } from './provider.style';


const ProviderItem = ({ data, onSelect, radioName, id, checked }) => (
  <Item data-testid="provider-item">
    <input
      type="radio"
      name={radioName}
      id={id}
      onChange={onSelect}
      value={data.registerLink}
      checked={checked}
    />
    <ProviderItemStyle data-testid="title" htmlFor={id} className="provider-item">
      <div className="img-group">
        <img src={data.image} alt={data.label} />
        <span className="label">{data.label}</span>
      </div>
      <FontAwesomeIcon icon="check" className="checked" />
    </ProviderItemStyle>
  </Item>
);

export default ProviderItem;
