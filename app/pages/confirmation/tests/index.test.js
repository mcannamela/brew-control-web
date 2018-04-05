import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Confirmation from '../index';

describe('Confirmation', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Confirmation match={{params: {plan: 'test'}}}/>
    );
    expect(output.find('Link').length).toBe(1);
  });
});
