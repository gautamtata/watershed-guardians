import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Pin from './Pin'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPSTYLE = 'mapbox://styles/gautamtata/cjwy3b2a8144o1cpa0lourv0t';
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZ2F1dGFtdGF0YSIsImEiOiJjanR0MWt0NnkwM2JmNDVvZmdzM2c1bWFzIn0.EsUpW8CxT9m30nwtQsd_dg"
class Map extends Component {

  state = {
    viewport: {
      width: 1000,
      height: 1000,
      latitude: 36.474,
      longitude: -121.498,
      zoom: 8
    },
    markers: [
      {
        longitude: -121.7345,
        latitude: 36.4755,
        title: 'Carmel Lagoon'
      }
    ]
  }


  isSelectedMarker(lat, long) {
    if (this.props.selectedMarker) {
      if (this.props.selectedMarker.lat === lat && this.props.selectedMarker.long === long) {
        return true
      }
    }
    return false
  }

  render() {
    // set up the markers:
    let markers = this.state.markers.map((marker) => {
        return (
          <Marker latitude={marker.latitude} longitude={marker.longitude}>
            <Pin onClick={() => this.props.markerClicked(marker.latitude, marker.longitude)} isSelected={this.isSelectedMarker(marker)} />
          </Marker>
        )
    })

    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/gautamtata/cjwy3b2a8144o1cpa0lourv0t"
      >
        {markers}
      </ReactMapGL>
    );
  }
}

export default Map