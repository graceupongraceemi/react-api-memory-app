/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import {
  addUniqueIds,
  getFormedData,
  getPairedPics,
  shuffleCards
} from '../utils';

// [
//   {
//     id: // to match the pair, can be just the index of it
//     uri: // to display the img
//     isShown: // to show the card of the image
//     isFound: // to know if a match was found
//   }
// ]

const useGameLogic = (images) => {
  const [cards, setCards] = useState([]);

  const prepareCards = () => {
    const a = getFormedData(images);
    const b = getPairedPics(a);
    const c = addUniqueIds(b);
    const d = shuffleCards(c); // (d) needs to be sest aa cards
    setCards(d);
  };

  const flipCard = (clickedCardId) => {
    console.log('flipCard', clickedCardId); // Will be shown in console
    const flippedCards = cards.map((card) => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true;
      }

      return card;
    });

    setCards(flippedCards);
  };

  const onCardClick = (clickedCardId) => {
    console.log({ clickedCardId }); // Will be shown in console
    flipCard(clickedCardId);
  };

  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

  return { cards, onCardClick };
};

export default useGameLogic;
