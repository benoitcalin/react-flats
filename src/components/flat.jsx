import React, { Component } from 'react';

class Flat extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleClick = () => {
    const { flat, selectFlat } = this.props;
    selectFlat(flat);
  }

  render () {
    const { flat } = this.props;
    return (
      <div className="card" onClick={this.handleClick} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`}}>
        <div className="card-category">{`${flat.price} ${flat.priceCurrency}`}</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    )
  }
}

export default Flat;
