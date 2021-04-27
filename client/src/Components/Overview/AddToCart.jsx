/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import Styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import $ from 'jquery';
import { StyleContext } from './StyleContext.jsx';

const AddToCartContainer = Styled.div`
  position: absolute;
  left: 65%;
  top: 500px;
  z-index: 10;
`;

const PleaseSelectSize = Styled.h4`
  position: absolute;
  bottom: 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  color: red;
`;

const SizeSelector = Styled.select`
  display:inline-block;
  padding:0.35em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  // font-family:'Roboto',sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
  cursor: pointer;
`;

const QuantitySelector = Styled.select`
  display:inline-block;
  padding:0.35em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  // font-family:'Roboto',sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
  cursor: pointer;
`;

const AddProductToCart = Styled.button`
  display: block;
  padding:0.35em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration:none;
  // font-family:'Roboto',sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
  cursor: pointer;
  background: white;
  border-width: thin;
`;

const Favorite = Styled.button`
  display:inline-block;
  padding:0.35em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  // font-family:'Roboto',sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
  cursor: pointer;
  background: white;
  border-width: thin;
`;

const AddToCart = () => {
  const { currentStyleSkus } = useContext(StyleContext);
  const [currentSize, setCurrentSize] = useState('Select Size');
  const [currentSku, setCurrentSku] = useState(null);
  const [quantitiesList, setQuantities] = useState(null);
  const [pleaseSelect, setPleaseSelect] = useState(' ');

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
    if (currentSize === 'Select Size') {
      setPleaseSelect('Please Select Size');
    } else {
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
    }
  };

  const updateStyleAndSku = (event) => {
    setPleaseSelect(' ');
    setCurrentSize(event.target.value);
    currentStyleSkus.forEach((sku) => {
      if (sku[1].size === event.target.value) {
        setCurrentSku(sku[0]);
      }
    });
  };

  return (
    <AddToCartContainer>
      <PleaseSelectSize>{pleaseSelect}</PleaseSelectSize>
      <SizeSelector onChange={updateStyleAndSku} id="selector">
        (
        <option>
          {(currentStyleSkus !== null && currentStyleSkus[0][0] === 'null') ? 'Out of Stock' : 'Select Size'}
        </option>
        {(currentStyleSkus !== null) ? currentStyleSkus.map((sku, index) => ((sku[1].quantity > 0)
          ? <option key={index} name={sku[0]}>{sku[1].size}</option> : null)) : null}
        )
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
