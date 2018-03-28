import React from 'react';
import { Translate } from 'react-redux-i18n';
import { Row, Col } from 'react-flexbox-grid';

import CompanyLogo from '../../assets/svg/logo_black.svg';
import Heart from '../../assets/svg/heart.svg';
import SocialIcons from '../../assets/svg/socialicons.svg';
import '../../assets/sass/components/footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <Row top='xs'>
          <Col xs={12} md={2}>
            <a href='https://github.com/mcannamela/brew-control' className='footer__title'>
              <Translate  value='footer.optimize' />
            </a>
            <a href='https://github.com/mcannamela/brew-control' className='footer__subtitle'>
              <Translate value='footer.fba' />
            </a>
            <a href='https://github.com/mcannamela/brew-control' className='footer__subtitle'>
              <Translate value='footer.sponsored' />
            </a>
          </Col>
          <Col xs={12} md={2}>
            <a href='https://github.com/mcannamela/brew-control' className='footer__title'>
              <Translate  value='footer.sellers' />
            </a>
          </Col>
          <Col xs={12} md={2}>
            <a href='https://github.com/mcannamela/brew-control' className='footer__title'>
              <Translate  value='footer.company' />
            </a>
          </Col>
          <Col xs={12} md={2}>
            <a href='https://github.com/mcannamela/brew-control' className='footer__button'>
              <Translate  value='footer.freeDemo' />
            </a>
          </Col>
        </Row>

        <Row><Col xs={12} className='footer__divider'></Col></Row>

        <Row>
          <Col xs={12} md={4}>
            <CompanyLogo className='footer__logo'/>
            <Translate className='footer__copyright' value='footer.copyright' />
          </Col>
          <Col xs={12} md={8}>
            <div className='footer__terms'>
              <a href='https://github.com/mcannamela/brew-control'>
                <Translate  value='footer.privacy' />
              </a>
              <a href='https://github.com/mcannamela/brew-control'>
                <Translate  value='footer.terms' />
              </a>

              <Translate className='footer__made' value='footer.made1' />
              <Heart className='footer__heart' />
              <Translate className='footer__made' value='footer.made2' />
            </div>
            <div>
              <SocialIcons className='footer__socialicons'/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
