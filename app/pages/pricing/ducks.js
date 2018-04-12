export const PRICING_TYPES = {
  MONTHLY: 'originalGravity',
  YEARLY: 'finalGravity'
};

export const initialState = {
  brewingModel: PRICING_TYPES.MONTHLY,
  brewStates: []
};

export const CHANGE_PRICING = 'app/pricing/CHANGE_PRICING';
export const PREPEND_BREW_STATE = 'app/pricing/PREPEND_BREW_STATE';

const MAX_STATES = 1000000;

export default (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_PRICING:
    return {
      ...state,
      brewingModel: action.payload
    };
  case PREPEND_BREW_STATE:
    return {
      ...state,
      brewStates: [action.brewState, ...state.brewStates].slice(0, MAX_STATES)
    };
  default:
    return state;
  }
};

/**
 * A redux action to trigger the change between pricing options
 * @param pricingType {PRICING_TYPES} the type of pricing to change to.
 */
export const changePricing = pricingType => {
  return {
    type: CHANGE_PRICING,
    payload: pricingType
  };
};

export const prependBrewState = brewState => {
  return {
    type: PREPEND_BREW_STATE,
    brewState: brewState
  };
};



/**
 * A function that maps the app state the the components properties
 *
 * @param {Object} state the current redux store statements
 */
export const mapStateToProps = state => {
  return {
    brewingModel: state.pricingReducer.brewingModel
  };
};

/**
 * A function that will map dispatch functions to properties for react redux
 *
 * @param {Object} state the current redux store statements
 */
export const mapDispatchToProps = dispatch => {
  return {
    onSliderToggle: isLeft => {
      dispatch(changePricing(isLeft ? PRICING_TYPES.MONTHLY : PRICING_TYPES.YEARLY));
    }
  };
};
