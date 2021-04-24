import React from 'react';
import Gallery from './Gallery.jsx';
import ProductsContextProvider from './ProductsContext.jsx';
import ProductInfo from './ProductInfo.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import StyleContextProvider from './StyleContext.jsx';

const Overview = () => {
  return (
    <ProductsContextProvider>
      <StyleContextProvider>
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
        <Gallery />
      </StyleContextProvider>
    </ProductsContextProvider>
  );
};

export default Overview;
