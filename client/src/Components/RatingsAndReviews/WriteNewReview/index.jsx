import React from 'react';
import ReviewPartOne from './reviewOne/ReviewOne.jsx';
import ReviewPartTwo from './reviewTwo/ReviewTwo.jsx';
import ReviewPartThree from './reviewThree/ReviewThree.jsx';
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
