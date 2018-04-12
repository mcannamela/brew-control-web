import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Translate} from 'react-redux-i18n';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Confirmation extends React.Component {
  render() {
    return (
      <Grid className={this.props.brewingModel}>
        <Header/>
        <Row>
          <Col xs={12}>
            <Translate value='confirmation.line'/> <Translate
            value={`pricing.plan.types.${this.props.match.params.plan}`}/>
          </Col>
          <Col xs={12}>
            <Link to='/'><Translate value='confirmation.back'/></Link>
          </Col>
        </Row>
        <Footer/>
      </Grid>
    );
  }
}
