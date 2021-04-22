import React, { createContext, useState } from 'react';

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [cards, setCards] = useState([]);

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const addCard = (obj) => {
    setCards((oldCards) => [...oldCards, obj]);
  };

  return (
    <CardContext.Provider value={{ cards, removeCard, addCard }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;

/**
 * const getData = () =>
    fetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products')
      .then((res) => res.json());



 */