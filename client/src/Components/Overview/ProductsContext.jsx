/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import { MainContext } from '../../contexts/MainContextProvider.jsx';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [images, setImages] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [prodInfo, setProdInfo] = useState(null);
  const [skus, setSkus] = useState(null);
  const [stylesList, setStylesList] = useState(null);
  const { currProduct } = useContext(MainContext);

  const getProducts = (endpoint) => (fetch(`api/${endpoint}`)
    .then((data) => data.json()));

  useEffect(() => {
    getProducts(`products/${currProduct.currProd}`)
      .then((productList) => {
        setProdInfo({
          productID: productList.id,
          productCategory: productList.category,
          productTitle: productList.name,
          defaultPrice: productList.default_price,
          slogan: productList.slogan,
          description: productList.description,
        });
        return getProducts(`products/${currProduct.currProd}/styles`);
      })
      .then((styles) => {
        setStylesList(styles.results);
        setSkus(styles.results[0].skus);
        setImages(styles.results[0].photos);
      });
  }, [currProduct]);

  return (
    <ProductsContext.Provider value={{
      images, setImages, currentImage, setCurrentImage, prodInfo, skus, stylesList,
    }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
