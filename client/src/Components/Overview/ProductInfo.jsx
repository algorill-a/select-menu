/* eslint-disable import/extensions */
import React, { useContext, useEffect, useState } from 'react';
import Styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { ProductsContext } from './ProductsContext.jsx';
import { StyleContext } from './StyleContext.jsx';

const ProductInfoContainer = Styled.div`
  position: absolute;
  left: 65%;
  top: 100px;
  font-family: 'Montserrat', sans-serif;
`;

const Original = Styled.div`
  color: black;
  font-weight: 300;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
`;

const Price = Styled(Original)`
  text-decoration: line-through;
  font-family: 'Montserrat', sans-serif;
`;

const Sale = Styled.div`
  color: red;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
`;

const Rating = Styled.div`
  bottom: 0;
`;

const ProductInfo = () => {
  const { prodInfo } = useContext(ProductsContext);
  const { currentProduct, currentStyle, currentRating } = useContext(StyleContext);
  const [price, setPrice] = useState({ price: null, salesPrice: null });

  const getProducts = (endpoint) => (fetch(`api/${endpoint}`)
    .then((data) => data.json()));

  useEffect(() => {
    getProducts(`products/${currentProduct}/styles`)
      .then((product) => {
        product.results.forEach((result) => {
          if (result.style_id === currentStyle) {
            setPrice({ price: `$${result.original_price}`, sale: `$${result.sale_price}` });
          }
        });
      });
  }, [currentStyle]);

  const reviewClickHandler = () => {
    <a href="ratings">Go to Ratings</a>;
  };

  return (
    <ProductInfoContainer>
      <Rating onClick={reviewClickHandler}>{[...Array(5)].map((star, index) => <GiBananaPeeled size={25} color={index <= currentRating ? '#BEDF7C' : '#808080'} value={index} />)}</Rating>
      <div>{prodInfo !== null ? prodInfo.productCategory : null}</div>
      <h1>{prodInfo !== null ? prodInfo.productTitle : null}</h1>
      <div>
        {price.sale !== '$null' ? (
          <>
            <Price>{price.price}</Price>
            <Sale>{price.sale}</Sale>
          </>
        ) : <Original>{price.price}</Original>}
      </div>
      <a
        style={{ display: 'block' }}
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-show-count="false"
        data-size="large"
      >
        Tweet
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      <a
        style={{ display: 'block' }}
        data-pin-do="buttonBookmark"
        data-pin-tall="true"
        href="https://www.pinterest.com/pin/create/button/"
      >
        Save
      </a>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
