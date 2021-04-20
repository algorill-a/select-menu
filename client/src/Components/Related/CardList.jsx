import React, { useContext, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import Card from './Card.jsx';
import { CardContext } from '../../contexts/CardContext.jsx';

// Styled Components
const CardListContainer = styled.div`
  border: 1px solid black,
  padding: 10px;
  position: relative;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLeft = styled.button`
  position: absolute;
  height: 50px;
  top: 50%;
  left: 0px;
  opacity: 30%;

  :hover {
    opacity: 80%;
  }
`;

const IconRight = styled.button`
  position: absolute;
  height: 50px;
  top: 50%;
  right: 0px;
  opacity: 30%;

  :hover {
    opacity: 80%;
  }
`;

// Card List Component
const CardList = () => {
  const { cards } = useContext(CardContext);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const prevCard = () => {
    const reset = currentCardIndex === 0;
    const index = reset ? cards.length - 1 : currentCardIndex - 1;
    setCurrentCardIndex(index);
  };

  const nextCard = () => {
    const resetIndex = currentCardIndex === cards.length - 1;
    const index = resetIndex ? 0 : currentCardIndex + 1;
    setCurrentCardIndex(index);
  };

  const activeCards = cards.slice(currentCardIndex, currentCardIndex + 4);
  const cardsToDisplay = activeCards.length < 4
    ? [...activeCards, ...cards.slice(0, 4 - activeCards.length)] : activeCards;

  return cards.length ? (
    <div>
      <h1>HELLO THERE!</h1>
      <CardListContainer>
        <IconLeft onClick={prevCard}><IoIosArrowBack /></IconLeft>
        {cardsToDisplay.map((card) => (<Card card={card} key={card.id} />))}
        <IconRight onClick={nextCard}><IoIosArrowForward /></IconRight>
      </CardListContainer>
    </div>

  ) : (
    <div className="empty">Add to Outfit</div>
  );
};

export default CardList;
