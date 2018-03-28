import React from 'react';
import { Translate } from 'react-redux-i18n';
import { Row, Col } from 'react-flexbox-grid';

import '../../assets/sass/components/agency.scss';
import BlueArrow from '../../assets/svg/arrows/blue_arrow.svg';
import PurpleArrow from '../../assets/svg/arrows/purple_arrow.svg';

export default class Agency extends React.Component {
  render() {
    return (
      <Row className='agency'>
        <Col xs={12}>
          <Translate className='agency__callout' value='pricing.agency.callout' />
        </Col>
        <Col xs={12}>
          <Translate className='agency__subline' value='pricing.agency.subline' />
        </Col>
        <Col xs={12}>
          <a className='agency__button' href='https://github.com/mcannamela/brew-control'>
            <Translate value='pricing.agency.contact' />
            <BlueArrow className='agency__arrow_blue' />
            <PurpleArrow className='agency__arrow_purple' />
          </a>
        </Col>
      </Row>
    );
  }
}
