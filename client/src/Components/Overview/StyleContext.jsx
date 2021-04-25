/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect, useContext } from 'react';
import { MainContext } from '../../contexts/MainContextProvider.jsx';

export const StyleContext = createContext();

const StyleContextProvider = (props) => {
  const { currProduct } = useContext(MainContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [currentStylePhotos, setCurrentStylePhotos] = useState(null);
  const [currentStyleSkus, setCurrentStyleSkus] = useState(null);
  const [allStyles, setAllStyles] = useState(null);

  const getProducts = (endpoint) => (fetch(`api/${endpoint}`)
    .then((data) => data.json()));

  useEffect(() => {
    getProducts('products')
      .then(() => {
        setCurrentProduct(currProduct.currProd);
        return getProducts(`products/${currProduct.currProd}/styles`);
      })
      .then((productStyles) => {
        setCurrentStyle(currProduct.currStyle);
        setCurrentStylePhotos(productStyles.results[0].photos);
        setCurrentStyleSkus(Object.entries(productStyles.results[0].skus));
        const styles = [];
        productStyles.results.forEach((result) => {
          styles.push({ style_id: result.style_id, photo: result.photos[0].thumbnail_url });
        });
        setAllStyles(styles);
      });
  }, []);

  useEffect(() => {
    getProducts(`products/${currProduct.currProd}/styles`)
      .then((productStyles) => {
        productStyles.results.forEach((result) => {
          if (currentStyle === result.style_id) {
            setCurrentStylePhotos(
              productStyles.results[productStyles.results.indexOf(result)].photos,
            );
            setCurrentStyleSkus(
              Object.entries(productStyles.results[productStyles.results.indexOf(result)].skus),
            );
          }
        });
      });
  }, [currentStyle]);

  return (
    <StyleContext.Provider value={{
      currentProduct,
      currentStyle,
      currentStylePhotos,
      allStyles,
      setCurrentStyle,
      currentImage,
      setCurrentImage,
      currentStyleSkus,
    }}
    >
      {props.children}
    </StyleContext.Provider>
  );
};

export default StyleContextProvider;

// let styles = [];
// productStyles.results.forEach((result) => {
//   styles.push({ style_id: result.style_id, photo: result.photos[0].thumbnail_url });
// }
