import React, { createContext, useState, useEffect } from 'react';

export const StyleContext = createContext();

const StyleContextProvider = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [currentStylePhotos, setCurrentStylePhotos] = useState(null);
  const [currentStyleSkus, setCurrentStyleSkus] = useState(null);
  const [allStyles, setAllStyles] = useState(null);

  const getProducts = (endpoint) => {
    return (fetch(`api/${endpoint}`)
      .then((data) => data.json()));
    };

  useEffect(() => {
    getProducts('products')
      .then((productList) => {
        setCurrentProduct(productList[0].id);
        return getProducts(`products/${productList[0].id}/styles`);
      })
      .then((productStyles) => {
        setCurrentStyle(productStyles.results[0].style_id);
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
    getProducts(`products/${currentProduct}/styles`)
      .then((productStyles) => {
        productStyles.results.forEach((result) => {
          if (currentStyle === result.style_id) {
            setCurrentStylePhotos(productStyles.results[productStyles.results.indexOf(result)].photos);
            setCurrentStyleSkus(Object.entries(productStyles.results[productStyles.results.indexOf(result)].skus));
          }
        });
      });
  }, [currentStyle]);

  return (
    <StyleContext.Provider value={{ currentProduct, currentStyle, currentStylePhotos, allStyles, setCurrentStyle, currentImage, setCurrentImage, currentStyleSkus }}>
      {props.children}
    </StyleContext.Provider>
  );
};

export default StyleContextProvider;

// let styles = [];
// productStyles.results.forEach((result) => {
//   styles.push({ style_id: result.style_id, photo: result.photos[0].thumbnail_url });
// }
