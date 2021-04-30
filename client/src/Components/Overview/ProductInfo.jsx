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
  position: relative;
  bottom: 30px;
  z-index: 1;
`;

const Pinterest = Styled.a`
  display: block;
`;

const Twitter = Styled.a`
  display: block;
`;

const FullStars = Styled.span`
  position: relative;
  opacity: 50%;
  z-index: 0;
  margin-top: 5px;
`;

const Star = Styled.span`
  position: absolute;
  clip: ${(props) => (props.percent > 0 && props.percent <= 25 ? "rect(0px, 7px, 25px, 0px)"
    : props.percent > 25 && props.percent <= 50 ? "rect(0px, 13px, 25px, 0px)"
    : props.percent > 50 && props.percent <= 75 ? "rect(0px, 17px, 25px, 0px)"
    : "rect(0px, 25px, 25px, 0px)")}
`;

const ProductInfo = () => {
  const { prodInfo } = useContext(ProductsContext);
  const { currentProduct, currentStyle, currentRating } = useContext(StyleContext);
  const [price, setPrice] = useState({ price: null, salesPrice: null });

  // average rating
  const fullStarCount = Math.floor(currentRating);
  const percentStar = ((currentRating - Math.floor(currentRating)) * 100).toFixed(0);

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
      <FullStars>{[...Array(5)].map((star, index) => <GiBananaPeeled size={25} color="#3d3d3d" key={index} />)}</FullStars>
      <Rating>
        {fullStarCount > 0 ? ([...Array(fullStarCount)].map((star, index) => <GiBananaPeeled size={25} color="#20afe3" key={index} />)) : null}
        {percentStar > 0 ? (<Star star={fullStarCount} percent={percentStar}><GiBananaPeeled size={25} color="#20afe3" /></Star>) : null}
      </Rating>
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
