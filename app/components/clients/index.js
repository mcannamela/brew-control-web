import React from 'react';
import { Translate } from 'react-redux-i18n';
import { Row, Col } from 'react-flexbox-grid';

import '../../assets/sass/components/clients.scss';

const COMPANIES = [
  'doge'
];

export default class Clients extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Translate className='clients__title' value='pricing.pr.title' />
        </Col>
        <Col xs={12}>
          <Translate className='clients__subline' value='pricing.pr.subline' />
        </Col>
        <Col xs={12}><div className='clients__divider'></div></Col>
        {COMPANIES.map(company => {
          const image = require(`../../assets/png/companies/${company}.png`);
          return (
            <Col key={company} xs={12} md={4} lg={3}>
              <div
                style={{
                  backgroundImage: `url(${image})`
                }}
                className={`clients__logo clients__${company}`}></div>
            </Col>
          );
        })}
      </Row>
    );
  }
}
