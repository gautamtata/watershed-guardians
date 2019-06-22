import React, { Component } from 'react';
import TestInfoPane from './testInfoPane.js';
import CheckboxLabels from './checkbox';
import './testpane.css';

class TestPane extends Component {
  state = {
    testInfoName: null,
  };
  close = () => {
    this.setState({ testInfoName: null });
  };

  render() {
    if (this.state.testInfoName) {
      return (
        <div className="test-pane">
          <TestInfoPane testName={this.state.testInfoName} close={this.close} />{' '}
          <div className="healthy-test-ranges"></div>
        </div>
      );
    }
    let testComponents = this.props.allTests.map((testName, i) => {
      let className = !this.props.selectedTests.includes(testName)
        ? 'test'
        : 'selected test';
      return (
        <div className={className}>
          <span className="testname">
            <CheckboxLabels
              label={testName}
              onClick={() => this.props.onClickTest(testName)}
              initializeTrue={i === 0}
            />
          </span>
          <span
            id="info-circle"
            className="fas fa-info-circle"
            onClick={() => this.setState({ testInfoName: testName })}
          ></span>
        </div>
      );
    });

    return <div className="test-pane">{testComponents}</div>;
  }
}

export default TestPane;
