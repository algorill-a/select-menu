/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [currProduct, setCurrProduct] = useState({ currProd: 23147, currStyle: 129653 });

  const changeProduct = (product) => {
    setCurrProduct({ currProd: product.currProd, currStyle: product.currStyle });
  };

  return (
    <MainContext.Provider value={{ currProduct, changeProduct }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
