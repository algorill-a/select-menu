/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const OutfitContext = createContext();

const OutfitContextProvider = (props) => {
  const [outfitList, setOutfitList] = useState([]);

  const addToOutfit = (product) => {
    setOutfitList((outfits) => [...outfits, product]);
  };

  const removeOutfit = (product) => {
    setOutfitList(outfitList.filter(({ prodStyleId }) => prodStyleId !== product));
  };

  return (
    <OutfitContext.Provider value={{ outfitList, addToOutfit, removeOutfit }}>
      {props.children}
    </OutfitContext.Provider>
  );
};

export default OutfitContextProvider;
