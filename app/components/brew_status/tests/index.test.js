import React from 'react';
import {shallow, mount, render} from 'enzyme';
import BrewStatus from '../index';
import Slider from '../../slider';

describe('BrewStatus', () => {
  it('should render correctly', () => {
    const spy = jest.fn();
    const output = shallow(
      <BrewStatus brewingModel={'originalGravity'} onSliderToggle={spy}/>
    );
    expect(output.find(Slider).length).toBe(1);
    expect(output.find(Slider).prop('isLeft')).toBe(true);
    expect(output.find(Slider).prop('onToggle')).toBe(spy);
  });
});
