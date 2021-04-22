import React from 'react';
import Styled from 'styled-components';

const AddToCartContainer = Styled.div`
  position: absolute;
  right: 10%;
  bottom 20%;
  z-index: 10;
`;

const SizeSelector = Styled.select`
`;

const QuantitySelector = Styled.select`
`;

const AddProductToCart = Styled.button`
`;

const AddToCart = () => {
  return (
    <AddToCartContainer>
      <SizeSelector>
        <option>one</option>
        <option>two</option>
        <option>three</option>
      </SizeSelector>
      <QuantitySelector>
        <option>one</option>
        <option>two</option>
        <option>three</option>
      </QuantitySelector>
      <AddProductToCart>Add To Cart</AddProductToCart>
    </AddToCartContainer>
  );
}

export default AddToCart;
