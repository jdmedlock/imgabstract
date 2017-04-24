import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SearchTerm from './../../../src/client/pages/imagesearch/SearchTerm';

describe('<SearchTerm>', function () {
  it('should have a label', function () {
    const wrapper = shallow(<SearchTerm/>);
    expect(wrapper.find('label')).to.have.length(1);
  });
});
