import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SearchTerm from './../../../src/client/containers/pages/imagesearch/SearchTerm';

describe('<SearchTerm>', function () {
  it('should have a button', function () {
    const wrapper = shallow(<SearchTerm/>);
    expect(wrapper.find('button')).to.have.length(1);
  });
});
