import React from 'react';
import Map from './components/Map/Map.js'
import InfoPane from './components/InfoPane/infopane.js'
import Chart from './components/Chart/chart.js'

import './App.css';
import './Maps/maps.css';

// why we use super(props): https://overreacted.io/why-do-we-write-super-props/
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
    return (
      <div className="App">
        <Map />
        <InfoPane />
      </div>
    );
  }
}

export default App;
