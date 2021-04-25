/* eslint-disable import/extensions */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RatingSummary from './RatingSummary.jsx';
import Recommendation from './Recommendation.jsx';
import RatingBars from './RatingBars.jsx';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

const Img = styled.div`
  font-aling: center;
  background-color: #a4ffc1;
`;

const RatingBreakdown = () => {
  const [breakdown, setBreakdown] = useContext(ReviewBreakdownContext);
  const id = 23149;
  const getBreakdown = () => {
    axios.get(`/api/reviews/meta?product_id=${id}`)
      .then((response) => setBreakdown(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(getBreakdown, []);

  if (JSON.stringify(breakdown) === '{}') {
    return (
      <Img><img src="./gorilla.gif" /></Img>
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

//#a4ffc1
