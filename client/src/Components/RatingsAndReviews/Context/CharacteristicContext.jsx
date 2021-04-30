/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';

export const CharacteristicContext = createContext();

const CharacteristicProvider = (props) => {
  const [charas, setCharas] = useState([
    {
      name: 'Size',
      options: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
      id: null,
    },
    {
      name: 'Width',
      options: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      id: null,
    },
    {
      name: 'Comfort',
      options: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      id: null,
    },
    {
      name: 'Quality',
      options: ['Poor', 'Below average', 'What I expected', 'Pretty Great', 'Perfect'],
      id: null,
    },
    {
      name: 'Length',
      options: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      id: null,
    },
    {
      name: 'Fit',
      options: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
      id: null,
    },
  ]);

  return (
    <CharacteristicContext.Provider value={[charas, setCharas]}>
      {props.children}
    </CharacteristicContext.Provider>
  );
};

export default CharacteristicProvider;
