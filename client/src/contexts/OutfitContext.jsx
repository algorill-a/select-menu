/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import { MainContext } from './MainContextProvider.jsx';
import { outfitReducer } from '../reducers/outfitReducer.jsx';

export const OutfitContext = createContext();

const OutfitContextProvider = (props) => {
  const [outfitList, dispatch] = useReducer(outfitReducer, [], () => {
    const localData = localStorage.getItem('outfit');
    return localData ? JSON.parse(localData) : [];
  });
  const { currProduct } = useContext(MainContext);

  useEffect(() => {
    localStorage.setItem('outfit', JSON.stringify(outfitList));
  }, [outfitList]);

  const addToOutfit = (product) => {
    outfitList.push(product);
    const unique = [...new Map(outfitList.map((outfit) => [outfit.prodStyleId, outfit])).values()];
    dispatch({ type: 'ADD_OUTFIT', value: unique });
  };

  const getProducts = (endpoint) => fetch(`api/${endpoint}`)
    .then((res) => res.json());

  const addToOutfitCard = (() => {
    let productId;
    getProducts(`products/${currProduct.currProd}`)
      .then((data) => { productId = (data.category); });
    getProducts(`products/${currProduct.currProd}/styles/`)
      .then((style) => {
        const item = style.results.filter((data) => (
          data.style_id === currProduct.currStyle
        ));
        addToOutfit({
          prodStyleId: currProduct.currStyle,
          prodCategory: productId,
          prodName: item[0].name,
          imageUrl: item[0].photos[0].thumbnail_url,
          price: item[0].original_price,
          sale: item[0].sale_price,
        });
      });
  });

  return (
    <OutfitContext.Provider value={{
      outfitList,
      addToOutfit,
      addToOutfitCard,
      dispatch,
    }}
    >
      {props.children}
    </OutfitContext.Provider>
  );
};

export default OutfitContextProvider;
