import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Agency from '../index';

describe('Agency', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Agency />
    );
    expect(output.find('Row').length).toBe(1);
  });
});
