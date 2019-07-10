import React, { Component } from 'react';

class Marker extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='marker'/>
    )
  }
}

export default Marker;
