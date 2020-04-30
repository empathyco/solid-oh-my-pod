import React from "react";
import {configure, shallow} from 'enzyme';
import  ShopComponent  from "../shop.component.js";
import { withTranslation } from 'react-i18next';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<ShopComponent t={key => key} />',() => {
  it('should render shop', () => {
    const wrapper = shallow(< ShopComponent  t={key => key} />, { disableLifecycleMethods: true });
    expect(wrapper.exists()).toBe(true);


  });
});

