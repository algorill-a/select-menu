import React, { useState, useEffect, createContext } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [images, setImages] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const getProducts = (endpoint) => {
    return (fetch(`api/${endpoint}`)
      .then((data) => data.json()));
  };

  useEffect(() => {
    getProducts('products')
      .then((productList) => getProducts(`products/${productList[0].id}/styles`))
      .then((styles) => setImages(styles.results[0].photos));
  }, []);

  return (
    <ProductsContext.Provider value={{ images, setImages, currentImage, setCurrentImage }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;