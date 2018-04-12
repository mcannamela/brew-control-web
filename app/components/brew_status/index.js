import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Translate} from 'react-redux-i18n';
import {Row, Col} from 'react-flexbox-grid';
import TemperatureGraph from '../temperature_graph';

import Slider from '../slider';
import '../../assets/sass/components/brew_status.scss';

const BEERS = [{
  name: 'ale',
  originalGravity: '1.067',
  finalGravity: '1.011',
  calloutAmount: '250'
}, {
  name: 'lager',
  originalGravity: '1.055',
  finalGravity: '1.015',
  calloutAmount: '1000'
},];


const CHART_CONFIG = {
  title: {
    text: 'Some Manufactured Data About DogeBrew'
  },

  subtitle: {
    text: 'Source: drinkdoge.com'
  },

  yAxis: {
    title: {
      text: 'Arbitrary Value [Arb.]'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Consumption',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Desire',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Dogeryness',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
};

export default class BrewStatus extends React.Component {
  render() {
    return (
      <div className='plan'>
        <TemperatureGraph config={CHART_CONFIG} />
        <Row bottom="xs">
          <Col xs={12} md={4} lgOffset={2}>
            <Translate className='plan__headline' value='pricing.title.headline'/>
            <h1><Translate className='plan__subline' value='pricing.title.subline'/></h1>
          </Col>
          <Col xs={12} md={8} lg={6} className='plan__slider'>
            <Translate className='plan__monthly_cta' value='pricing.plan.originalGravity'/>
            <Slider
              isLeft={this.props.brewingModel === 'originalGravity'}
              onToggle={this.props.onSliderToggle}/>
            <Translate className='plan__yearly_cta' value='pricing.plan.finalGravity'/>
          </Col>
        </Row>
        <Row className='plan__options'>
          {BEERS.map(plan => {

            /**
             * Function that renders a contact us link
             */
            const renderContactUs = () => {
              return (
                <a className='plan__option_select' href='https://github.com/mcannamela/brew-control'>
                  <Translate
                    value={plan.name === 'largeBusiness' ? 'pricing.plan.contact' : 'pricing.plan.select'}/>
                </a>
              );
            };

            /**
             * Function that renders a select link
             */
            const renderSelect = () => {
              return (
                <Link className='plan__option_select' to={{
                  pathname: `/confirmation/${plan.name}/${this.props.brewingModel}/`
                }}>
                  <Translate
                    value={plan.name === 'largeBusiness' ? 'pricing.plan.contact' : 'pricing.plan.select'}/>
                </Link>
              );
            };

            return (
              <Col key={plan.name} className={`plan__option plan__option_${plan.name}`} xs={12} md={6} lg={3}>
                <div className='plan__option_title'>
                  <Translate value={`pricing.plan.types.${plan.name}`}/>
                </div>
                <Translate
                  className='plan__option_price'
                  value='pricing.plan.price'
                  amount={this.props.brewingModel === 'originalGravity' ? plan.originalGravity : plan.finalGravity}/>
                <Translate className='plan__option_perMonth' value='pricing.plan.perMonth'/>

                <div className='plan__option_divider'/>

                <Translate
                  className={`plan__option_cta ${plan.name === 'largeBusiness' ? 'large' : ''}`}
                  value={plan.name === 'largeBusiness' ? 'pricing.plan.largeCallout' : 'pricing.plan.callout'}
                  amount={plan.calloutAmount}/>

                {plan.name !== 'largeBusiness' ? renderSelect() : renderContactUs()}
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

BrewStatus.propTypes = {
  brewingModel: PropTypes.string.isRequired,
  onSliderToggle: PropTypes.func.isRequired,
};
