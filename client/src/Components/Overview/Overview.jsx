/* eslint-disable import/extensions */
import React from 'react';
import Gallery from './Gallery.jsx';

import ProductInfo from './ProductInfo.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';

const Overview = () => (
  <>
    <ProductInfo />
    <StyleSelector />
    <AddToCart />
    <Gallery />
  </>
);

export default Overview;
