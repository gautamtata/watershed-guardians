import React, { Component } from 'react';
import './testpane.css';

const MESSAGES = {
  ph:
    'The pH of river water is the measure of how acidic or basic the water is on a scale of 0-14. It is a measure of hydrogen ion concentration. U.S. natural water falls between 6.5 and 8.5 on this scale with 7.0 being neutral. The optimum pH for river water is around 7.4. ',
  'temperature (deg C)':
    "Temperature impacts the rates of metabolism and growth of aquatic organisms, rate of plants' photosynthesis, solubility of oxygen in river water, and organisms' sensitivity to disease, parasites, and toxic materials. At a higher temperature, plants grow and die faster, leaving behind matter that requires oxygen for decomposition.",
  'depth (cm)':
    'The depth of a river is an indicator of many factors including: rain that year,groundwater depletion or an obstruction in the course of the river.',
  'dissolved oxygen (ppm)':
    'An adequate supply of dissolved oxygen gas is essential for the survival of aquatic organisms. A deficiency in this area is a sign of an unhealthy river. There are a variety of factors affecting levels of dissolved oxygen. The atmosphere is a major source of dissolved oxygen in river water.',
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
