import React, { Component } from 'react';
import './testpane.css';

const MESSAGES = {
  'ph':
    'A low pH below 4 can cause acid rains while a high pH above 9.5 can cause severe illnesses including death.',
  'temperature (deg C)':
    "Low temperatures causes less flow of the water which doesn't allow mineral deposits. High temperature causes drought which limits the amount of freshwater available.",
  'depth (cm)':
    'A high depth for a river is good while a low depth below 7m starts a shortage of water in the county.',
  'dissolved oxygen (ppm)':
    'Any DO values below 5mg/L is potentially lethal for aquatic species.',
};

class TestInfoPane extends Component {
  render() {
    console.log(this.props.testName);
    return (
      <div className="test-info-pane">

        <h2>{this.props.testPane}</h2>
        <i
          className="close-icon fas fa-times fa-2x"
          onClick={this.props.close}
        ></i>
        <br />
        <h1>{this.props.testName.toUpperCase()}</h1>
        <div className="message">{MESSAGES[this.props.testName]}</div>
      </div>
    );
  }
}

export default TestInfoPane;
