import React, {Component} from 'react'
import './testpane.css'

const TITLES = {
	'ph': "PH",
	'temperature': "TEMPERATURE",
	'depth': "DEPTH",
	'dissolved oxygen': "DISSOLVED OXYGEN"
}

const MESSAGES = {
	'ph': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	'temperature': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	'depth': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
	'dissolved oxygen': "Dissolved Oxygen information"
}

// props:
// - testName
// - close()
class TestInfoPane extends Component {
	render() {
		return (
			<div> 
				<h2>{this.props.testPane}</h2>
				<div className="close fas fa-window-close" onClick={this.props.close}>CLOSE</div>
				<br />
				<div style = {{textAlign:"right",textDecoration:"underline",fontWeight:'bold'}} classname ="title-message">{TITLES[this.props.testName]}</div>
				<div style = {{textAlign:"right",fontSize:'3.5vw'}}className="message">{MESSAGES[this.props.testName]}</div>
				
			</div>
		)
	}
}

export default TestInfoPane