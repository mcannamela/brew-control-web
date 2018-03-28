import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Clients from '../index';

describe('Clients', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Clients />
    );
    expect(output.find('Row').length).toBe(1);
  });
});
