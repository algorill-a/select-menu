/* eslint-disable import/extensions */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import RatingSummary from './RatingSummary.jsx';
import Recommendation from './Recommendation.jsx';
import RatingBars from './RatingBars.jsx';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';
import { MainContext } from '../../../contexts/MainContextProvider.jsx';

// const Img = styled.div`
//   font-aling: center;
//   background-color: #a4ffc1;
// `;

const RatingBreakdown = () => {
  const [breakdown, setBreakdown] = useContext(ReviewBreakdownContext);
  const { currProduct } = useContext(MainContext);
  const productId = currProduct.currProd;
  const getBreakdown = () => {
    axios.get(`/api/reviews/meta?product_id=${productId}`)
      .then((response) => setBreakdown(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(getBreakdown, []);

  if (JSON.stringify(breakdown) === '{}') {
    return (
      ''
    );
  }

  return (
    <div>
      <RatingSummary />
      <RatingBars />
      <Recommendation />
    </div>
  );
};

export default RatingBreakdown;
