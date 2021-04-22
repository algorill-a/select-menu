import React from 'react';
import Gallery from './Gallery.jsx';
import ImageContextProvider from './ImageContext.jsx';
import ProductsContextProvider from './ProductsContext.jsx';
import ProductInfo from './ProductInfo.jsx';
import AddToCart from './AddToCart.jsx';

const Overview = () => {
  return (
    <ImageContextProvider>
      <ProductsContextProvider>
        <ProductInfo />
        <AddToCart />
        <Gallery />
      </ProductsContextProvider>
    </ImageContextProvider>
  );
};

export default Overview;
