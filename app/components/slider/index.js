import React from 'react';
import PropTypes from 'prop-types';
import CompanyLogo from '../../assets/svg/logo_black.svg';
import '../../assets/sass/components/slider.scss';

export default class Slider extends React.Component {
  render() {
    return (
      <div onClick={this.onClick.bind(this)} className='slider'>
        <div className={ `slider__toggle ${this.props.isLeft ? 'left' : 'right'}` }></div>
      </div>
    );
  }

  onClick() {
    this.props.onToggle(!this.props.isLeft);
  }
}

Slider.propTypes = {
  isLeft: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};
