/* eslint-disable import/extensions */
import React from 'react';
import Styled from 'styled-components';
import Gallery from './Gallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';

const InfoContainer = Styled.div`
`;

const Overview = () => (
  <>
    <InfoContainer>
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </InfoContainer>
    <Gallery />
    <ProductDescription />
  </>
);

export default Overview;
