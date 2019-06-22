import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './pin';
import data from '../../data.js';
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPSTYLE = 'mapbox://styles/gautamtata/cjwy3b2a8144o1cpa0lourv0t';
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiZ2F1dGFtdGF0YSIsImEiOiJjanR0MWt0NnkwM2JmNDVvZmdzM2c1bWFzIn0.EsUpW8CxT9m30nwtQsd_dg';
class Map extends Component {
  constructor(props) {
    super(props);

    if (window.matchMedia('screen and (max-width: 768px)').matches) {
      this.state = {
        viewport: {
          height: 400,
          width: 420,
          latitude: 36.44874,
          longitude: -121.740352,
          zoom: 9,
        },
        markers: [],
      };
    } else {
      this.state = {
        viewport: {
          width: 1000,
          height: 1000,
          latitude: 36.617535,
          longitude: -121.782411,
          zoom: 8,
        },
        markers: [],
      };
    }
  }

  // Markers is an array of objects
  // {lat: , long: , title: }
  // keys of the object are lat and long

  componentWillMount() {
    function convertStringOfLatLongToFloats(str) {
      console.log('input: ' + str);
      str = str.split(' ');

      let out = { latitude: parseFloat(str[0]), longitude: parseFloat(str[1]) };
      console.log(out);
      return out;
    }

    let newMarkers = [];

    let markerKeys = Object.keys(data);
    for (let i = 0; i < markerKeys.length; i++) {
      let key = markerKeys[i];
      // for each key get the lat long as floats.
      // Create object that has latitude,longitude,title
      let markerObject = convertStringOfLatLongToFloats(key);
      // Add title to existing object and push object into newMarkers array.
      let title = data[key]['title'];
      markerObject.title = title;

      newMarkers.push(markerObject);
    }

    this.setState({ markers: newMarkers });
  }

  isSelectedMarker(lat, long) {
    if (this.props.selectedMarker) {
      if (
        this.props.selectedMarker.lat === lat &&
        this.props.selectedMarker.long === long
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    // set up the markers:
    let markers = this.state.markers.map(marker => {
      return (
        <Marker latitude={marker.latitude} longitude={marker.longitude}>
          <Pin
            onClick={() =>
              this.props.markerClicked(marker.latitude, marker.longitude)
            }
            isSelected={this.isSelectedMarker(marker)}
          />
        </Marker>
      );
    });

    return (
      <div
        className="widget-content"
        ref={mapWidgetElement => (this.mapWidgetElement = mapWidgetElement)}
      >
        <ReactMapGL
          className="map-wrapper"
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/gautamtata/cjx5swjwor5qe1co75mxpyg3d"
        >
          {markers}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
