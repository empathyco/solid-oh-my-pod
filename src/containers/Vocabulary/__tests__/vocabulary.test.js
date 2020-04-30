import React from "react";
import {configure, shallow} from 'enzyme';
import  VocabularyComponent  from "../vocabulary.component.js";
import { withTranslation } from 'react-i18next';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<VocabularyComponent t={key => key} />',() => {
  it('should render shop', () => {
    const wrapper = shallow(< VocabularyComponent  t={key => key} />);
    expect(wrapper.exists()).toBe(true);


  });
});

