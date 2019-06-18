import React, {Component} from 'react'
import './testpane.css'
import TestInfoPane from './TestInfoPane.js'

// props:
// - selectedTests[]
// - allTests[]
// - onClickTest(testName)
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
				<TestInfoPane 
					testName={this.state.testInfoName}
					close={this.close}
				/>
			)
		}

		let testComponents = this.props.allTests.map((testName) => {
			let className = (!this.props.selectedTests.includes(testName)) ? "test" : "selected test";
			return (
				<div className={className}>
					<span className="test-label" onClick={() => this.props.onClickTest(testName)}>{testName} </span>
					<span className="fas fa-info-circle" onClick={() => this.setState({testInfoName: testName})}></span>
				</div>
			)
		})

		return (
			<div className="test-pane">
				<h1>Tests</h1>
				<p>Select or unselect the tests below to render on the graph</p>
				<p>This data for each test was collected at this point on the Carmel river.</p>
				<p>Click on 'info' to learn more about each test.</p>
				{testComponents}
			</div>
		)
	}
}

export default TestPane