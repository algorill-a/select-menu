/* eslint-disable import/extensions */
import React from 'react';
import Characteristics from './Characteristics.jsx';
import OverallRating from './OverallRating.jsx';
import Recommend from './Recommend.jsx';
import WriteReviewProvider from '../WriteNewReviewContext.jsx';

const ReviewPartOne = () => (
  <WriteReviewProvider>
    <fieldset>
      Hello from Review Part One
      <OverallRating />
      <br />
      <Recommend />
      <br />
      <Characteristics />
    </fieldset>
  </WriteReviewProvider>
);

export default ReviewPartOne;
