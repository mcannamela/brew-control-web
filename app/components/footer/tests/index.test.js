import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from '../index';

describe('Footer', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Footer />
    );
    expect(output.find('a').length).toBe(8);
  });
});
