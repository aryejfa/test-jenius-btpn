/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  Icon,
} from '../index';

describe('Icon Componentt', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Icon />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});