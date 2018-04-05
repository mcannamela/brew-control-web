import React from 'react';
import CompanyLogo from '../../assets/svg/logo_black.svg';
import '../../assets/sass/components/header.scss';

export default class Header extends React.Component {
  render() {
    return (<CompanyLogo className='header__logo'/>);
  }
}
