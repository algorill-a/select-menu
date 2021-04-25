/* eslint-disable import/extensions */
import React from 'react';
import ReviewPartOne from './reviewOne/ReviewOne.jsx';
import ReviewPartTwo from './ReviewTwo.jsx';
import ReviewPartThree from './ReviewThree.jsx';
import WriteReviewProvider from './WriteNewReviewContext.jsx';

const WriteNewReview = () => (
  <WriteReviewProvider>
    <div>
      <ReviewPartOne />
      <ReviewPartTwo />
      <ReviewPartThree />
    </div>
  </WriteReviewProvider>
);

export default WriteNewReview;
