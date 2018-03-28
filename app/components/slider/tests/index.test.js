import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Slider from '../index';

describe('Slider', () => {
  it('should render right toggle correctly', () => {
    const output = shallow(
      <Slider isLeft={false} onToggle={jest.fn()}/>
    );
    expect(output.find('.slider__toggle.right').length).toBe(1);
  });

  it('should render right toggle correctly', () => {
    const output = shallow(
      <Slider isLeft={true} onToggle={jest.fn()}/>
    );
    expect(output.find('.slider__toggle.left').length).toBe(1);
  });

  it('should handle click event on container correctly', () => {
    const spy = jest.fn();
    const output = shallow(
      <Slider isLeft={false} onToggle={spy}/>
    );
    output.find('.slider').simulate('click');
    expect(spy.mock.calls.length).toBe(1);
  });
});
