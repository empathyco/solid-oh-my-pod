import React from "react";
import {configure, shallow} from 'enzyme';
import  SearchComponent  from "../search.component.js";
import { withTranslation } from 'react-i18next';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<SearchComponent t={key => key} />',() => {
  it('should render shop', () => {
    const wrapper = shallow(< SearchComponent t={key => key} />, { disableLifecycleMethods: true });
    expect(wrapper.exists()).toBe(true);


  });
});

