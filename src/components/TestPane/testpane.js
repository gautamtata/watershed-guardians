import React, {Component} from 'react'
import './testpane.css'
import TestInfoPane from './TestInfoPane.js'

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
				<h1>{this.props.title}</h1>
				
				{testComponents}
			</div>
		)
	}
}

export default TestPane