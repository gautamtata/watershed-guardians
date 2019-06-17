import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import './maps.css'

/*
// The lat longs for the locations. Variable names are location names.
var rosie = [-121.7345,36.4755];
var songbird = [-121.8310,36.5243];
var garlandRanchVehicle = [-121.7724,36.5098];
var pgmuseum1 = [-121.9172,36.6219]
var Tembladero = [-121.641827,36.686481];
var Upper_Carr_Lake = [-121.624996,36.690346];
var Natividad_Creek = [-121.610786,36.698049];
var Gabilan_Creek = [-121.618658,36.712341];
var Canyon_Creek_Park = [-121.448815,36.523483];
var Arroyo_Seco = [-121.322509,36.280613]
var San_Lorenzo_Park = [-121.146637,36.203563];
var Greenwood_Park = [-121.914214,36.621562];
var Plaskett_Creek= [-121.4646235,35.9192732];
var Big_Creek= [-121.600059,36.069889];
var Willow_Creek = [-121.46124,35.894088];
var Mill_Creek= [-121.490596,35.983119];

*/

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.7345,36.4755]
    },
    properties: {
      title: 'Rosie bridge',
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.7724,36.5098]
    },
    properties: {
      title: 'Garland ranch',
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.9172,36.6219]
    },
    properties: {
      title: 'Pacific grove museum',
      
    }
  },{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.8310,36.5243]
    },
    properties: {
      title: 'Songbird preserve',
      
    }
  },{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.4646235,35.9192732]
    },
    properties: {
      title: 'Plaskett creek',
      
    }
  },{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-121.600059,36.069889]
    },
    properties: {
      title: 'Big creek',
      
    }
  }]
};
  
// Security Key for mapbox
mapboxgl.accessToken = "pk.eyJ1IjoiZ2F1dGFtdGF0YSIsImEiOiJjanR0MWt0NnkwM2JmNDVvZmdzM2c1bWFzIn0.EsUpW8CxT9m30nwtQsd_dg"

class Map extends Component {
    constructor(props) {
        super(props);
        // the state of the map contains latitude and longitude coordinates and zoom/
        this.state = {
            lng: -121.198,
            lat: 36.474,
            zoom: 8.37 
        };
    }

    componentDidMount() {
        const {lng, lat, zoom} = this.state;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/gautamtata/cjumybuw9aima1flj2h8i8fpl',
            center: [lng,lat],
            zoom
        });

        map.on('move', () => {
            const {lng, lat} = map.getCenter();
            this.setState({
                lng: lng.toFixed(3),
                lat: lat.toFixed(4),
                zoom: map.getZoom()
            });
        });   

        geojson.features.forEach(function(marker) {

          // create a HTML element for each feature
          var el = document.createElement('div');
          el.className = 'marker';
        
          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
        });
    }

    render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className=" absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
          
        </div>
        <div className=" grid top right left bottom absolute" ref={el => this.mapContainer = el}  />
      </div>
    );
  }
}

export default Map;
