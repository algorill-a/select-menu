import React, { useState, useEffect, createContext } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [images, setImages] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [prodInfo, setProdInfo] = useState(null);
  const [skus, setSkus] = useState(null);
  const [stylesList, setStylesList] = useState(null);

  const getProducts = (endpoint) => {
    return (fetch(`api/${endpoint}`)
      .then((data) => data.json()));
  };

  useEffect(() => {
    getProducts('products')
      .then((productList) => {
        setProdInfo({
          productID: productList[0].id,
          productCategory: productList[0].category,
          productTitle: productList[0].name,
          defaultPrice: productList[0].default_price,
          slogan: productList[0].slogan,
          description: productList[0].description,
        });
        return getProducts(`products/${productList[0].id}/styles`);
      })
      .then((styles) => {
        setStylesList(styles.results);
        setSkus(styles.results[0].skus);
        setImages(styles.results[0].photos);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ images, setImages, currentImage, setCurrentImage, prodInfo, skus, stylesList }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;