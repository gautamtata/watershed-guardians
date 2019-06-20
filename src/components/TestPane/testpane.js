import React, {Component} from 'react'
import './testpane.css'
import TestInfoPane from './TestInfoPane.js'
import CheckboxLabels from './checkbox'

// props:
// - selectedTests[]
// - allTests[]
// - onClickTest(testName)
// - title
class TestPane extends Component {

	state = {
		testInfoName: null
	}
	close = () => {
		this.setState({testInfoName: null})
	}

	render() {
		if (this.state.testInfoName) {
			return (
				<div className="test-pane">
					<TestInfoPane 
						testName={this.state.testInfoName}
						close={this.close}
					/>
				</div>
			)
		}

		let testComponents = this.props.allTests.map((testName, i) => {
			let className = (!this.props.selectedTests.includes(testName)) ? "test" : "selected test";
			return (
				<div className={className}>
					<span className='testname'>
						<CheckboxLabels label={testName} onClick={() => this.props.onClickTest(testName)} initializeTrue={i===0} />
					</span>
					<span id = "info-circle" className="fas fa-info-circle" onClick={() => this.setState({testInfoName: testName})}></span>
				</div>
			)
		})

		return (
			<div className="test-pane">
				{/*<div className="message">Click on a test below to toggle it on the graph. Click on the info icons to learn more about each test (what it means, how the data was collected, etc.)</div>*/}
				{testComponents}
			</div>
		)
	}
}

export default TestPane