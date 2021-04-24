/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [cards, setCards] = useState([]);

  const addCard = (obj) => {
    setCards((oldCards) => [...oldCards, obj]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
