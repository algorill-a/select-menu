import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import RatingSummary from './RatingSummary';
import Recommendation from './Recommendation';
import RatingBars from './RatingBars';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext';
import { MainContext } from '../../../contexts/MainContextProvider';

const RatingBreakdown = () => {
  const [breakdown, setBreakdown] = useContext(ReviewBreakdownContext);
  const { currProduct } = useContext(MainContext);
  const productId = currProduct.currProd;
  const getBreakdown = () => {
    axios.get(`/api/reviews/meta?product_id=${productId}`)
      .then((response) => setBreakdown(response.data))
      .catch((error) => error.send(error));
  };
  useEffect(getBreakdown, [productId]);

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
