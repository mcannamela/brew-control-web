import reducer, * as pricingDuck from '../ducks';

test('Constant should be constant', () => {
  expect(pricingDuck.CHANGE_PRICING).toEqual('app/pricing/CHANGE_PRICING');
});

test('Reducer should return the initial state if an unknown action is received', () => {
  const initialState = {};
  const out = reducer(initialState, {type: 'UNKNOWN', payload: 'junk'});
  expect(out).toEqual(initialState);
});

test('Reducer will supply its own initialState when none is given', () => {
  const out = reducer(undefined, {type: 'UNKNOWN', payload: 'junk'});
  expect(out).toEqual(pricingDuck.initialState);
});

test('Reducer should receive changePricing action and update state', () => {
  const initialState = {};
  const out = reducer(initialState, pricingDuck.changePricing(pricingDuck.PRICING_TYPES.MONTHLY));
  expect(out).toEqual({brewingModel: 'originalGravity'});
});


test('Reducer should receive prependBrewingState action and update state', () => {
  const initialState = {brewStates: []};
  const out1 = reducer(initialState, pricingDuck.prependBrewState('state1'));
  expect(out1).toEqual({'brewStates': ['state1']});

  const out2 = reducer(out1, pricingDuck.prependBrewState('state2'));
  expect(out1).toEqual({'brewStates': ['state1']});
  expect(out2).toEqual({'brewStates': ['state2', 'state1']});
});

test('Max states should be pretty big', () => {expect(pricingDuck.MAX_STATES).toBeGreaterThan(10000);});

test('Reducer should receive prependBrewingState repeatedly but truncate the array eventually', () => {
  const initialState = {brewStates: Array.from(Array(pricingDuck.MAX_STATES).keys())};
  expect(initialState.brewStates.length).toEqual(pricingDuck.MAX_STATES);

  const out = reducer(initialState, pricingDuck.prependBrewState(-1));
  const brewStates = out.brewStates;
  expect(brewStates[0]).toEqual(-1);
  expect(brewStates[1]).toEqual(0);
  expect(brewStates.slice(-1)[0]).toEqual(pricingDuck.MAX_STATES-2);


});
