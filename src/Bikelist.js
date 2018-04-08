import React from 'react';
import PropTypes from 'prop-types';

const Bikelist = props => {
  const bikes = props.bikes;

  return (
    <ul>
      {bikes.map(bike => (
        <li key={bike.name}><a onClick={() => props.removeBike(bike.name)}>X</a> {bike.name} - {bike.gears} gears</li>
      ))}
    </ul>
  );
};

Bikelist.propTypes = {
  bikes: PropTypes.array
};

export default Bikelist;