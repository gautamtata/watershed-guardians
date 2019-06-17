import React, {Component} from 'react';
import CanvasJSReact from '../CanvasChart/canvaschart.js';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
	  e.dataSeries.visible = false;
	} else {
	  e.dataSeries.visible = true;
	}
}
class Chart extends Component {	
  
	render() {
		const options = {
				animationEnabled: true,	
				title:{
					text: "Carmel river lagoon test data"
        },
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
        legend: {
          cursor: "pointer",
          itemclick : toggleDataSeries
        },
        
				data: [{
					type: "spline",
					name: "pH",
					showInLegend: true,
					dataPoints: [
						{ y: 7.5, label: "9/12/2018" },
						{ y: 9, label: "9/13/2018" },
						{ y: 8, label: "9/26/2018" },
						{ y: 11, label: "10/30/2018" },
						{ y: 8, label: "01/23/2019" },
						{ y: 8.5, label: "02/07/2019" },
						{ y: 8, label: "02/12/2019" },
						{ y: 8.5, label: "02/20/2019" }
						
					]
				},
				{
					type: "spline",
          name: "Temp ",
          suffix: "C",
					showInLegend: true,
					dataPoints: [
						{ y: 17.8, label: "9/12/2018" },
						{ y: 11.1, label: "9/13/2018" },
						{ y: 17.8, label: "9/26/2018" },
						{ y: 11, label: "10/30/2018" },
						{ y: 19, label: "01/23/2019" },
						{ y: 9.2, label: "02/07/2019" },
						{ y: 8, label: "02/12/2019" },
						{ y: 13.6, label: "2/20/2019" }
					]
				},{
					type: "spline",
          name: "Depth",
          suffix: "m",
					showInLegend: true,
					dataPoints: [
						{ y: 16.5, label: "9/12/2018" },
						{ y: 20.3, label: "9/13/2018" },
						{ y: 6.4, label: "9/26/2018" },
						{ y: 16, label: "10/30/2018" },
						{ y: 2.3, label: "01/23/2019" },
						{ y: 6, label: "02/07/2019" },
						{ y: 4.5, label: "02/12/2019" },
						{ y: 8.5, label: "2/20/2019" }
					]
				},{
					type: "spline",
          			name: "Dissolved Oxygen",
					showInLegend: true,
					dataPoints: [
						{ y: 5.6, label: "9/12/2018" },
						{ y: 7, label: "9/13/2018" },
						{ y: 16.2, label: "9/26/2018" },
						{ y: 7 , label: "10/30/2018" },
						{ y:  13, label: "01/23/2019" },
						{ y: 9.2, label: "02/07/2019" },
						{ y: 11.2, label: "02/12/2019" },
						{ y: 14.5, label: "2/20/2019" }
					]
				}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 	/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}


 
export default Chart;