import React from "react";
import {configure, shallow} from 'enzyme';
import  FriendListComponent  from "../friendlist.component.js";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<FriendListComponent />',() => {
  it('should render friendlist', () => {
     const wrapper = shallow(<FriendListComponent/>);
    expect(wrapper.exists()).toBe(true);


  });
});

