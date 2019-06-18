import React from 'react'

// props:
// - markerClicked(lat, long)
// - lat
// - long
class Marker extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: false
		}
	}

	render() {
		let className = (this.isSelected ? "marker selected" : "marker")
		return (
			<div className={className} onClick={() => console.log('marker clicked!!!')}></div>
		)
	}
}

export default Marker