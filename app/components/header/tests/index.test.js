import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../index';

describe('Footer', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Header />
    );
    expect(output.find('.header__logo').length).toBe(1);
  });
});
