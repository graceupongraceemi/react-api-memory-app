import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES, PACE } from '../../constants';

import RadioBox from '../RadioBox/RadioBox';
import Counter from '../Counter/Counter';

import styles from './Settings.module.css';

const Settings = () => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [pace, setPace] = useState(PACE[0]);

  return (
    <div className={`${styles.settings} frosted`}>
      <h2>Settings</h2>

      <h4>Category</h4>
      <div className={`${styles.setting}`}>
        {CATEGORIES.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedItem={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        ))}
      </div>

      <h4>Amount of cards:</h4>
      <div className={`${styles.setting}`}>
        <Counter />
      </div>

      <h4>Pace:</h4>
      <div className={`${styles.setting}`}>
        {PACE.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedItem={pace}
            onChange={(e) => setPace(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
