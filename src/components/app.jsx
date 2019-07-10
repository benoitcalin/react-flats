import React, { Component } from 'react';

import FlatList from './flat_list';
import Map from './map';
import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <Map selectedFlat={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
