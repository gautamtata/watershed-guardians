import React, { Component } from 'react';
import CanvasJSReact from '../CanvasChart/canvaschart.js';
import TestPane from '../TestPane/testpane.js';
import SimpleModal from './chart-modal';
import './chart.css';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  state = {
    selectedTests: [],
    allTests: [],
  };

  onClickTest = testName => {
    // if testName is already selected, unselect it
    // if testName is not in selectedTests: add it.
    var newSelectedTests = [];
    for (var i = 0; i < this.state.selectedTests.length; i++) {
      let selectedTest = this.state.selectedTests[i];
      if (testName !== selectedTest) {
        newSelectedTests.push(selectedTest);
      }
    }
    if (!this.state.selectedTests.includes(testName))
      newSelectedTests.push(testName);
    this.setState({ selectedTests: newSelectedTests });
  };

  componentDidMount() {
    // initializing selectedTests to all possible tests:
    var testNames = [];

    for (var testName in this.props.data) {
      if (this.props.data.hasOwnProperty(testName)) {
        // for each testName in data, we will create a new object to match Canvas.js format:
        testNames.push(testName);
      }
    }
    this.setState({ selectedTests: [testNames[0]], allTests: testNames });
  }

  render() {
    var canvasData = [];
    for (var testName in this.props.data) {
      if (this.props.data.hasOwnProperty(testName)) {
        if (this.state.selectedTests.includes(testName)) {
          canvasData.push({
            type: 'spline',
            name: testName,
            dataPoints: this.props.data[testName],
            showInLegend: false,
          });
        }
      }
    }

    let options = {
      animationEnabled: true,
      axisY: {
        yValueFormatString: '#0.## °C',
      },
      axisX: {
        title: 'DATE',
        includeZero: false,
      },
      toolTip: {
        shared: true,
      },
      data: canvasData,
    };

    return (
      <div>
        <div
          className="chart-container-wrapper"
          onClick={() => this.props.unselectMarker()}
        ></div>
        <div className="chart-container">
          <p
            className="go-back-button"
            onClick={() => this.props.unselectMarker()}
          >
            go back
          </p>
          <TestPane
            title={this.props.title}
            selectedTests={this.state.selectedTests}
            allTests={this.state.allTests}
            onClickTest={this.onClickTest}
          />
          <div className="canvas-chart">
            <div className="title">{this.props.title}</div>
            <p className="subtitle">
              By interacting with this graph you can learn more about the health
              of the watershed
            </p>
            <SimpleModal />
            <CanvasJSChart options={options} />
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
