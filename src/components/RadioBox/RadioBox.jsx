import React from 'react';
import PropTypes from 'prop-types';

import styles from './RadioBox.module.css';

const RadioBox = ({ name }) => {
  return (
    <div className={`${styles.radioBox}`}>
      <input type='radio' name={name} value={name} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default RadioBox;
