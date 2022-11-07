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

const MAX_VISIBLE_CARDS = 2;

const useGameLogic = (images) => {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const prepareCards = () => {
    const a = getFormedData(images);
    const b = getPairedPics(a);
    const c = addUniqueIds(b);
    const d = shuffleCards(c); // (d) needs to be sest aa cards
    setCards(d);
  };

  const flipCard = (clickedCardId) => {
    // console.log('flipCard', clickedCardId);
    const flippedCards = cards.map((card) => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true;
      }

      if (card.isShown)
        setVisibleCards((oldState) => [...oldState, card.uniqueId]);
      return card;
    });

    setCards(flippedCards);
  };

  const onCardClick = (clickedCardId) => {
    if (visibleCards.length < MAX_VISIBLE_CARDS) {
      flipCard(clickedCardId);
    }
  };

  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

  useEffect(() => {
    if (visibleCards.length >= MAX_VISIBLE_CARDS) {
      const updatedCards = cards.map((card) => {
        if (visibleCards.indexOf(card.uniqueId) !== -1) {
          card.isShown = false;
        }

        return card;
      });

      setTimeout(() => {
        setVisibleCards([]);
      }, 1000);
    }
  }, [visibleCards]);

  return { cards, onCardClick };
};

export default useGameLogic;
