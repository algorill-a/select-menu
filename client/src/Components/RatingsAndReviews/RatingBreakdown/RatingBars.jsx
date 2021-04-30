/* eslint-disable import/extensions */
/* eslint-disable radix */
import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';
import RatingBar from './RatingBar.jsx';

const Ul = styled.div`
  padding-bottom: 20px;
`;

const Percent = styled.div`
  font-family: Helvetica;
  color: grey;
  float: right;
  padding-right: 10px;
`;

const RatingBars = () => {
  const [breakdown] = useContext(ReviewBreakdownContext);
  const [starRating, setStarRating] = useState({});
  const changeStarRatings = () => {
    setStarRating({
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    });

    Object.entries(breakdown.ratings).forEach((entry) => {
      const [key, value] = entry;
      setStarRating((prevRating) => ({ ...prevRating, [key]: value }));
    });
  };

  const getPercentage = () => {
    let total = 0;
    let recommended = 0;

    Object.entries(breakdown.recommended).forEach((entry) => {
      const [key, value] = entry;
      total += parseInt(value);
      if (key === 'true') {
        recommended = parseInt(value);
      }
    });
    return Math.floor((recommended / total) * 100);
  };

  const getIndivPercentage = (score) => {
    let total = 0;
    Object.values(breakdown.recommended).forEach((number) => {
      total += parseInt(number, 10);
    });
    const num = (score / total).toFixed(2);
    return (num * 100).toFixed(0);
  };

  useEffect(changeStarRatings, [breakdown]);

  return (
    <div>
      <Percent>
        {`${parseInt(getPercentage())}% recommend this product`}
      </Percent>
      <Ul>
        {Object.entries(starRating).slice(0).reverse().map((rating) => {
          const [key, value] = rating;
          return (
            <RatingBar
              title={key}
              value={getIndivPercentage(value)}
              key={uuidv4()}
            />
          );
        })}
      </Ul>
    </div>
  );
};

export default RatingBars;
