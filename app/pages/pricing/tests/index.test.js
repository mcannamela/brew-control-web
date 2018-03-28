import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Brewing } from '../index';

describe('Brewing', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Brewing pricingModel={'finalGravity'} />
    );
    expect(output.find('.finalGravity').length).toBe(1);
  });
});
