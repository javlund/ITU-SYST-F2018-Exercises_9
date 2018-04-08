import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bikeform extends Component {
  state = {
    name: '',
    gears: 1
  };

  updateBikeName(bikename) {
    this.setState({
      name: bikename
    });
  }

  updateBikeGears(gears) {
    this.setState({
      gears: gears
    })
  }

  saveBike(event) {
    event.preventDefault();
    this.props.createBike(this.state);
    this.setState({
      name: '',
      gears: 1
    });
  }

  render() {
    return (
      <form id="bikeform" onSubmit={event => this.saveBike(event)}>
        <fieldset>
          <legend>Cykelskuret</legend>
          <p>Navn
            <input placeholder="Navn" id="navn" autoFocus value={this.state.name} onChange={event => this.updateBikeName(event.target.value)} />
            <span id="fejl" style={{color: 'red'}}>{this.props.error}</span>
          </p>
          <p>Antal gear
            <select id="gear" value={this.state.gears} onChange={event => this.updateBikeGears(event.target.value)}>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="7">7</option>
            </select>
          </p>
          <button>Tilføj cykel</button>
        </fieldset>
      </form>
    );
  }
}

Bikeform.propTypes = {
  createBike: PropTypes.func,
  error: PropTypes.string
};

export default Bikeform;