/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import WriteNewReview from './WriteNewReview/index.jsx';
import ReviewListProvider from './Context/ReviewListContext.jsx';
import ReviewBreakdownProvider from './Context/ReviewBreakdownContext.jsx';

const RatingsAndReviews = () => (
  <div>
    <h1>Write Your Review</h1>
    <ReviewListProvider>
      <ReviewList />
    </ReviewListProvider>
    <ReviewBreakdownProvider>
      <RatingBreakdown />
    </ReviewBreakdownProvider>
    {/* <WriteNewReview /> */}
  </div>
);

export default RatingsAndReviews;
