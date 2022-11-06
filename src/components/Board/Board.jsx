import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Loader from './../Loader';
import Card from './../Card';

import useGetImages from './../../hooks/useGetImages';

import styles from './Board.module.css';
import useGameLogic from '../../hooks/useGameLogic';

const Board = ({ gameOptions }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  // console.log({ images });
  const cards = useGameLogic(images);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading &&
        cards.map((card) => <Card key={card.uniqueId} card={card} />)}
    </div>
  );
};

export default Board;

Board.propTypes = {
  gameOptions: PropTypes.shape({
    pace: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  })
};
