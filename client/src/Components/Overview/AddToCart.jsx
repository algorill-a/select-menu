/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import Styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import $ from 'jquery';
import { StyleContext } from './StyleContext.jsx';

const AddToCartContainer = Styled.div`
  position: absolute;
  right: 10%;
  bottom 30%;
  z-index: 10;
`;

const SizeSelector = Styled.select`
`;

const QuantitySelector = Styled.select`
`;

const AddProductToCart = Styled.button`
`;

const Favorite = Styled.button`
`;

const AddToCart = () => {
  const { currentStyleSkus } = useContext(StyleContext);
  const [currentSize, setCurrentSize] = useState('Select Size');
  const [currentSku, setCurrentSku] = useState(null);
  const [quantitiesList, setQuantities] = useState(null);

  useEffect(() => {
    if (currentSize !== 'Select Size' && currentStyleSkus !== null) {
      currentStyleSkus.forEach((sku) => {
        if (sku[1].size === currentSize) {
          const quantities = (Array.from({ length: (sku[1].quantity < 16 ? sku[1].quantity : 15) },
            (_, index) => index + 1)).map(
            (number, index) => <option key={index}>{number}</option>,
          );
          setQuantities(quantities);
        }
      });
    }
  }, [currentSize]);

  // const addItemToCart = () => {
  //   fetch('api/cart', {
  //     method: 'POST',
  //     body: {
  //       sku_id: currentSku,
  //     },
  //   })
  //     .then((res) => res.json)
  //     .then((json) => console.log(json));
  // };

  const addItemToCart = () => {
    $.ajax({
      url: 'api/cart',
      type: 'POST',
      data: { sku_id: currentSku },
      success: (data) => {
        console.log(data);
        setCurrentSize('Select Size');
      },
      error: (error) => console.log(error),
    });
  };

  const updateStyleAndSku = (event) => {
    setCurrentSize(event.target.value);
    currentStyleSkus.forEach((sku) => {
      if (sku[1].size === event.target.value) {
        setCurrentSku(sku[0]);
      }
    });
  };

  return (
    <AddToCartContainer>
      <SizeSelector onChange={updateStyleAndSku}>
        <option>Select Size</option>
        {(currentStyleSkus !== null) ? currentStyleSkus.map((sku, index) => ((sku[1].quantity > 0)
          ? <option key={index} name={sku[0]}>{sku[1].size}</option> : null)) : null}
      </SizeSelector>
      <QuantitySelector>
        {(currentSize === 'Select Size') ? <option>-</option> : quantitiesList}
      </QuantitySelector>
      <AddProductToCart onClick={addItemToCart}>Add To Cart</AddProductToCart>
      <Favorite><BsHeart /></Favorite>
    </AddToCartContainer>
  );
};

export default AddToCart;
