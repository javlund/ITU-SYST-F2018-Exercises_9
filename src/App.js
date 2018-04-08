import React, { Component } from 'react';
import Bikeform from './Bikeform';
import Bikelist from './Bikelist';
import { createBike, getBikes, removeBike } from './bikefunctions';


class App extends Component {
  state = {
    bikes: getBikes(),
    error: ''
  };

  removeBike(bikename) {
    removeBike(bikename);
    this.setState({
      bikes: getBikes(),
      error: ''
    });
  }

  createBike(bike) {
    try {
      createBike(bike);
      this.setState({
        bikes: getBikes(),
        error: ''
      });  
    } catch(error) {
      this.setState({
        error: error.message
      })
    }
  }

  render() {
    return (
      <div>
        <Bikeform createBike={bike => this.createBike(bike)} error={this.state.error} />
        <Bikelist bikes={this.state.bikes} removeBike={bikename => this.removeBike(bikename)} />
      </div>
    );
  }
}

export default App;
