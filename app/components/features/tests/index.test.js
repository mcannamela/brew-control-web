import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Features from '../index';

describe('Features', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Features />
    );
    expect(output.find('Row').length).toBe(1);
  });
});
