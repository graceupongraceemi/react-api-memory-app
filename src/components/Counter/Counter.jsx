import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Counter = () => {
  return (
    <div className='quantity'>
      <button className='minus'>-</button>
      <span className='quantity'>8</span>
      <button className='plus'>+</button>
    </div>
  );
};

export default Counter;
