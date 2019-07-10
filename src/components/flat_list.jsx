import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { flats } = this.props;
    return (
      flats.map(flat => <Flat flat={flat} selectFlat={this.props.selectFlat} key={flat.name} />)
    );
  }
}

export default FlatList;
