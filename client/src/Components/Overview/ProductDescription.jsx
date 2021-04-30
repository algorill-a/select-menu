/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import Styled from 'styled-components';
import { ProductsContext } from './ProductsContext.jsx';

const Container = Styled.div`
  color: black;
  font-weight: 100;
  font-family: 'Montserrat', sans-serif;
  width: 75%;
  margin-left: 15%;
  margin-top: 0;
`;

const Slogan = Styled.h3`
  font-weight: 900;
  font-style: italic;
`;

const ProductDescription = () => {
  const { prodInfo } = useContext(ProductsContext);

  return (
    <Container>
      <Slogan>{prodInfo !== null ? prodInfo.slogan : null}</Slogan>
      <p>{prodInfo !== null ? prodInfo.description : null}</p>
    </Container>
  );
};

export default ProductDescription;
