import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = ({ card }) => {
  return <p>Card {card.uniqueId}</p>;
};

export default Card;
