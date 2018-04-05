import React from 'react';
import '../../assets/sass/components/header.scss';

export default class Header extends React.Component {
  render() {
    const image = require('../../assets/png/companies/doge.png');
    return (
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: 256,
          width: 256
        }}
        className='header__logo'>
      </div>
    );
  }
}
