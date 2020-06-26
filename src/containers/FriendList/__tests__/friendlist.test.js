import React from "react";
import {configure, shallow} from 'enzyme';
import  FriendListComponent  from "../friendlist.component.tsx";
import { withTranslation } from 'react-i18next';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<FriendListComponent t={key => key} />',() => {
  it('should render friendlist', () => {
     const wrapper = shallow(< FriendListComponent  t={key => key} />);
    expect(wrapper.exists()).toBe(true);


  });
});

