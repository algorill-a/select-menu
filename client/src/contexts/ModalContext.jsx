/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useContext } from 'react';
import { MainContext } from './MainContextProvider.jsx';
// import styled from 'styled-components';

export const ModalContext = createContext();

// Modal Context

const ModalContextProvider = (props) => {
  const { currProduct } = useContext(MainContext);
  const [display, setDisplay] = useState(false);
  const [characteristics, setCharacteristics] = useState([]);
  const [prod1, setProd1Char] = useState({ name: '', feat: [] });
  const [prod2, setProd2Char] = useState({ name: '', feat: [] });
  let allFeat = [];

  const getProducts = (endpoint) => fetch(`api/${endpoint}`)
    .then((res) => res.json());

  // useEffect(() => {
  const makeModal = (product) => {
    const featList1 = [];
    const featList2 = [];

    getProducts(`products/${currProduct.currProd}`)
      .then((data1) => {
        data1.features.forEach((feat) => {
          featList1.push(`${feat.value} ${feat.feature}`);
          allFeat.push(`${feat.value} ${feat.feature}`);
        });
        setProd1Char({
          name: data1.name,
          feat: featList1,
        });
      });
    getProducts(`products/${product}`)
      .then((data2) => {
        data2.features.forEach((feat) => {
          featList2.push(`${feat.value} ${feat.feature}`);
          allFeat.push(`${feat.value} ${feat.feature}`);
        });
        setProd2Char({
          name: data2.name,
          feat: featList2,
        });
      });

    allFeat = [...new Set(allFeat)];
    setCharacteristics(allFeat);
  // }, []);
  };

  const toggleModal = () => {
    setDisplay(!display);
  };

  return (
    <ModalContext.Provider value={{
      display,
      toggleModal,
      characteristics,
      prod1,
      prod2,
      makeModal,
    }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
