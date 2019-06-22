import React from 'react';
import Chart from './components/Chart/chart.js';
import Map from './components/Map/map';
import data from './data';
import Infopane from './components/InfoPane/infopane';

import './App.css';
import './mobile.css';

// why we use super(props): https://overreacted.io/why-do-we-write-super-props/
class App extends React.Component {
  state = {
    selectedMarker: null, // later is set to something like: {lat: __, long: __}.
  };

  unselectMarker = () => {
    this.setState({ selectedMarker: null });
  };

  markerClicked = (lat, long) => {
    // there is nothing set yet:
    if (!this.state.selectedMarker) {
      this.setState({ selectedMarker: { lat, long } });
      return;
    }

    // this marker is already set, so unset:
    if (
      this.state.selectedMarker.lat === lat &&
      this.state.selectedMarker.long === long
    ) {
      this.setState({ selectedMarker: null });
      return;
    }

    // different marker set, so update to this marker:
    if (
      this.state.selectedMarker &&
      this.state.selectedMarker.lat !== lat &&
      this.state.selectedMarker.long !== long
    ) {
      this.setState({ selectedMarker: { lat, long } });
      return;
    }
  };

  render() {
    var chart = null;
    if (this.state.selectedMarker) {
      let key =
        this.state.selectedMarker.lat.toString(10) +
        ' ' +
        this.state.selectedMarker.long.toString(10);
      console.log(key);
      chart = (
        <Chart
          unselectMarker={this.unselectMarker}
          data={data[key]['testData']}
          title={data[key]['title']}
        />
      );
    }
    return (
      <div className="App">
        <Infopane />
        <div className="map-and-chart-container">
          <Map
            selectedMarker={this.state.selectedMarker}
            markerClicked={this.markerClicked}
          />
          {chart ? chart : ''}
        </div>
      </div>
    );
  }
}

export default App;
