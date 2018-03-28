import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import Header from '../../components/header';
import Clients from '../../components/clients';
import Features from '../../components/features';
import Footer from '../../components/footer';
import Plan from '../../components/plan';
import Agency from '../../components/agency';
import { mapStateToProps, mapDispatchToProps } from './ducks';

export class Brewing extends React.Component {
  render() {
    return (
      <Grid className={ this.props.brewingModel }>
        <Header />
        <Plan {...this.props} />
        <Agency />
        <Features />
        <Clients />
        <Footer />
      </Grid>
    );
  }
}

Brewing.Proptypes = {
  brewingModel: PropTypes.string.isRequired,
  onSliderToggle: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Brewing);
