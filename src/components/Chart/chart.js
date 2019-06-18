import React, {Component} from 'react';
import CanvasJSReact from '../CanvasChart/canvaschart.js';
import TestPane from '../TestPane/testpane.js'
import ChartModal from '../Modal/modal'
import './chart.css'

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {	
	state = {
		selectedTests: [],
		  allTests: []
	}
	onClickTest = (testName) => {
		// if testName is already selected, unselect it
		// if testName is not in selectedTests: add it.
		var newSelectedTests = []
		for (var i = 0; i < this.state.selectedTests.length; i++) {
			let selectedTest = this.state.selectedTests[i]
			if (testName !== selectedTest) {
				newSelectedTests.push(selectedTest)
			}
		}	
		if (!this.state.selectedTests.includes(testName)) newSelectedTests.push(testName)
		this.setState({selectedTests: newSelectedTests})
	}

	componentDidMount() {
		// initializing selectedTests to all possible tests:
		var testNames = []
		for (var testName in this.props.data) {
			if (this.props.data.hasOwnProperty(testName)) {
				// for each testName in data, we will create a new object to match Canvas.js format:
				testNames.push(testName)	
			}
		}
		this.setState({selectedTests: testNames, allTests: testNames})
	}
  
	render() {
		// transform data from data.js to format that Canvas.js expects
		var canvasData = []
		for (var testName in this.props.data) {
			if (this.props.data.hasOwnProperty(testName)) {
				if (this.state.selectedTests.includes(testName)) {
					// for each testName in data, we will create a new object to match Canvas.js format:
					canvasData.push(
						{
							type: 'spline',
							name: testName,
							dataPoints: this.props.data[testName],
							showInLegend: false
						}
					)
				}
			}
		}

		let options = {
			animationEnabled: true,
			axisX : {
	          title: "DATE",
	          includeZero: false
	        },
	        axisY : {
				title: "UNITS",
				includeZero: false
			},
			toolTip: {
				shared: true
			},
			data: canvasData,
		}

		  return (
		 	<div className="chart-container">
		 			<CanvasJSChart options={options}/>
					<TestPane 
		 			title={this.props.title}
		  				selectedTests={this.state.selectedTests}
		 				allTests={this.state.allTests}
		  				onClickTest={this.onClickTest}
					/>
		 	</div>
		  );
		// return(
		// 	<ChartModal />
		// )
		
	}
}
 
export default Chart;