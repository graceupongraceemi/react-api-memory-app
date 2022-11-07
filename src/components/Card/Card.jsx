import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image/Image';

import styles from './Card.module.css';

const Card = ({ card }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
        <div className={`${styles.front}`}></div>
        <div className={`${styles.back}`}>
          <Image url={card.url} />
        </div>
      </div>
    </div>
  );
};

export default Card;
