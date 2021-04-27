/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import axios from 'axios';
import ReviewPartOne from './reviewOne/ReviewOne.jsx';
import ReviewPartTwo from './ReviewTwo.jsx';
import ReviewPartThree from './ReviewThree.jsx';
import { WriteReviewContext } from '../Context/WriteNewReviewContext.jsx';

const WriteNewReview = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const [review, setReview] = reviewData;

  const handlePostSubmit = () => axios({
    method: 'post',
    url: '/api/reviews',
    data: review,
  })
    .then(() => setReview({
      product_id: null,
      rating: null,
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
    }))
    .catch((error) => console.log(error));

  return (
    <form>
      <ReviewPartOne onClick={() => console.log(review)} />
      <ReviewPartTwo />
      <ReviewPartThree />
      <button type="button" onClick={handlePostSubmit}>Submit</button>
    </form>
  );
};

export default WriteNewReview;
