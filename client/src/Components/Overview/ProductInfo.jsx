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

const Pinterest = Styled.a`
  display: block;
`;

const Twitter = Styled.a`
  display: block;
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

  return (
    <ProductInfoContainer>
      <Rating>{[...Array(5)].map((star, index) => <GiBananaPeeled size={25} color={index <= currentRating ? '#BEDF7C' : '#808080'} value={index} />)}</Rating>
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
      <div
        style={{ display: 'block' }}
        className="fb-share-button"
        data-href="http://localhost:1337/"
        data-layout="button"
        data-size="large"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A1337%2F&amp;src=sdkpreparse"
          className="fb-xfbml-parse-ignore"
        >
          Share
        </a>
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
    </ProductInfoContainer>
  );
};

export default ProductInfo;

// Product Category - product
// Product Title/Name - product
// Price - style
// Information/Overview - product
