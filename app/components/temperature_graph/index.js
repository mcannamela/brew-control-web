import React from 'react';
import ReactHighcharts from 'react-highcharts';
import PropTypes from 'prop-types';
import '../../assets/sass/components/temperature_graph.scss';


// Refer to https://www.npmjs.com/package/react-highcharts for details
export default class TemperatureGraph extends React.Component {
  render() {
    return (
      <ReactHighcharts config={this.props.config} ref="chart"></ReactHighcharts>
    );
  }
}

TemperatureGraph.propTypes = {
  config: PropTypes.bool.isRequired,
};
