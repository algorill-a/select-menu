import React, { createContext, useState } from 'react';

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [currProduct, setCurrProduct] = useState('23145');

  const changeProduct = (product) => {
    setCurrProduct(product);
  };

  return (
    <MainContext.Provider value={{ currProduct, changeProduct }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
