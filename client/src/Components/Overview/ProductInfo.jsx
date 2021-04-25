/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import Styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { ProductsContext } from './ProductsContext.jsx';

const ProductInfoContainer = Styled.div`
  position: absolute;
  right: 10%;
  top: 10%;
`;

const ProductInfo = () => {
  const { prodInfo } = useContext(ProductsContext);

  return (
    <ProductInfoContainer>
      <div>Star Rating</div>
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <div>{prodInfo !== null ? prodInfo.productCategory : null}</div>
      <h2>{prodInfo !== null ? prodInfo.productTitle : null}</h2>
      <div>{prodInfo !== null ? prodInfo.defaultPrice : null}</div>
      <button type="button">share</button>
    </ProductInfoContainer>
  );
};

export default ProductInfo;

// Product Category - product
// Product Title/Name - product
// Price - style
// Information/Overview - product