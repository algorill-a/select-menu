/* eslint-disable import/extensions */
import React, { useContext, useEffect, useState } from 'react';
import Styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { ProductsContext } from './ProductsContext.jsx';
import { StyleContext } from './StyleContext.jsx';

const ProductInfoContainer = Styled.div`
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr .5fr 1.5fr .75fr repeat(2, .5fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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
  vertical-align: center;
  bottom: 0;
`;

const ProductInfo = (props) => {
  const { prodInfo } = useContext(ProductsContext);
  const { currentProduct, currentStyle, currentRating } = useContext(StyleContext);
  const [price, setPrice] = useState({ price: null, salesPrice: null });
  // eslint-disable-next-line react/prop-types
  const { focus } = props;

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

  // const reviewClickHandler = () => {
  //   <a href="ratings">Go to Ratings</a>;
  //   focus();
  // };

  return (
    <ProductInfoContainer>
      <Rating onClick={focus}>{[...Array(5)].map((star, index) => <GiBananaPeeled size={25} color={index <= currentRating ? '#BEDF7C' : '#808080'} value={index} />)}</Rating>
      <div>{prodInfo !== null ? prodInfo.productCategory : null}</div>
      <h1 style={{ marginBottom: '0' }}>{prodInfo !== null ? prodInfo.productTitle : null}</h1>
      <div>
        {price.sale !== '$null' ? (
          <>
            <Price>{price.price}</Price>
            <Sale>{price.sale}</Sale>
          </>
        ) : <Original>{price.price}</Original>}
      </div>
      <div>
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
          data-pin-do="buttonBookmark"
          data-pin-tall="true"
          data-pin-shape="round"
          href="https://www.pinterest.com/pin/create/button/"
        >
          Save
        </a>
      </div>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
