/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import Styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import $ from 'jquery';
import { StyleContext } from './StyleContext.jsx';
import { OutfitContext } from '../../contexts/OutfitContext.jsx';

const AddToCartContainer = Styled.div`
  position: absolute;
  top: 625px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const PleaseSelectSize = Styled.h4`
  bottom: 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  color: red;
  margin: 0;
`;

const SizeSelector = Styled.select`
  display:inline-block;
  padding:1em 4em;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
  cursor: pointer;
`;

const QuantitySelector = Styled.select`
  display:inline-block;
  padding:1em 2em;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family: 'Montserrat', sans-serif;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
  cursor: pointer;
`;

const AddProductToCart = Styled.button`
  display: inline-block;
  padding:1em 5em;
  margin:0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration:none;
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
  padding:1em 2em;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
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
  const { addToOutfitCard } = useContext(OutfitContext);
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
            (number) => <option key={sku[0]}>{number}</option>,
          );
          setQuantities(quantities);
        }
      });
    }
  }, [currentSize]);

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
    <>
      <AddToCartContainer>
        <PleaseSelectSize>{pleaseSelect}</PleaseSelectSize>
        <div>
          <SizeSelector onChange={updateStyleAndSku} id="selector">
            (
            <option>
              {(currentStyleSkus !== null && currentStyleSkus[0][0] === 'null') ? 'Out of Stock' : 'Select Size'}
            </option>
            {(currentStyleSkus !== null) ? currentStyleSkus.map((sku) => ((sku[1].quantity > 0)
              ? <option key={sku[0]} name={sku[0]}>{sku[1].size}</option> : null)) : null}
            )
          </SizeSelector>
          <QuantitySelector>
            {(currentSize === 'Select Size') ? <option>-</option> : quantitiesList}
          </QuantitySelector>
        </div>
        <div>
          <AddProductToCart onClick={addItemToCart}>Add To Cart</AddProductToCart>
          <Favorite onClick={addToOutfitCard}><BsHeart /></Favorite>
        </div>
      </AddToCartContainer>
    </>
  );
};

export default AddToCart;
