import React from 'react';
import { Translate } from 'react-redux-i18n';
import { Row, Col } from 'react-flexbox-grid';
import '../../assets/sass/components/features.scss';

const FEATURES = [{
  name: 'dash',
  svg: 'dashboard'
},{
  name: 'bidding',
  svg: 'auction'
}, ];

export default class Features extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Translate className='features__title' value='pricing.planDetails.title' />
        </Col>
        {FEATURES.map(feature => {
          const Svg = require(`../../assets/svg/plans/${feature.svg}.svg`).default;
          return (
            <Col key={feature.name} xs={12} md={6} lg={4} className='features__feature'>
              <Svg className='features__feature__svg'/>
              <div className='features__feature__container'>
                <Translate
                  className='features__feature__title'
                  value={`pricing.planDetails.${feature.name}.title`} />
                <Translate
                  className='features__feature__subline'
                  value={`pricing.planDetails.${feature.name}.subline`} />
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}
