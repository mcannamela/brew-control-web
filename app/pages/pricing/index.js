import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid} from 'react-flexbox-grid';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BrewStatus from '../../components/brew_status';
import {mapDispatchToProps, mapStateToProps} from './ducks';

export class Brewing extends React.Component {
  render() {
    return (
      <Grid className={this.props.brewingModel}>
        <Header/>
        <BrewStatus {...this.props} />
        <Footer/>
      </Grid>
    );
  }
}

Brewing.Proptypes = {
  brewingModel: PropTypes.string.isRequired,
  onSliderToggle: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Brewing);
