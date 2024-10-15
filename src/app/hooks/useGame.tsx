import { useEffect, useState } from 'react';
import { ICard, dracomaniaCards } from '@/app/cardsData';

const INITIAL_TOTAL_CARDS = 5;

type InGameCard = ICard & {
  isUserCard: boolean;
};

export function useGame() {
  const [userCards, setUserCards] = useState<InGameCard[]>([]);
  const [currentCard, setCurrentCard] = useState<ICard>();

  useEffect(() => {
    const storageCard = localStorage.getItem('userCards');

    if (storageCard) {
      setUserCards(JSON.parse(storageCard));
      return;
    }

    const tempCards = [...dracomaniaCards];

    const randomCards = tempCards.sort(() => Math.random() - 0.5).slice(0, INITIAL_TOTAL_CARDS).map(c => c.id);

    const initialCards = dracomaniaCards.map((card) => {
      return {
        ...card,
        isUserCard: randomCards.includes(card.id),
      };
    });

    setUserCards(initialCards);
    localStorage.setItem('userCards', JSON.stringify(initialCards));

  }, []);


  const getCurrentCard = () => {
    const randomIndex = Math.floor(Math.random() * userCards.length);
    console.log(userCards.length);
    setCurrentCard(userCards[randomIndex]);
  };


  useEffect(() => {
    getCurrentCard();
  }, [userCards]);


  return { userCards, currentCard };
};

