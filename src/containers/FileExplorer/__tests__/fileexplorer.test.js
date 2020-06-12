import React from "react";
import {configure, shallow} from 'enzyme';
import  FileExplorerComponent  from "../components/fileExplorer/fileexplorer.component.js";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<FileExplorerComponent />',() => {
  it('should render file explorer', () => {
    const wrapper = shallow(<FileExplorerComponent/>);
    expect(wrapper.exists()).toBe(true);


  });
});

