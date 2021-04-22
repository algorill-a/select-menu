import React from 'react';
import Styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
// import TestDataContextProvider from './TestDataContext.jsx';

const ProductInfoContainer = Styled.div`
  position: absolute;
  right: 10%;
  top: 10%;
`;

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <div>Star Rating</div>
      <AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
      {/* <TestDataContextProvider> */}
        <div>Product Information</div>
        <div>Price</div>
      {/* </TestDataContextProvider> */}
      <button>share</button>
    </ProductInfoContainer>
  )
};

export default ProductInfo;
