import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Brewing } from '../index';

describe('Brewing', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Brewing brewingModel={'yearly'} />
    );
    expect(output.find('.yearly').length).toBe(1);
  });
});
