import React from "react";
import {configure, shallow} from 'enzyme';
import  FriendListItem  from "../friend-list-item.component.js";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<FriendListItem />',() => {
  it('should render file explorer', () => {
    const wrapper = shallow(<FriendListItem/>);
    expect(wrapper.exists()).toBe(true);


  });
});

