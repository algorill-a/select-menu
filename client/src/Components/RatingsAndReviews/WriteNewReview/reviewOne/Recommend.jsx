/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
import { WriteReviewContext } from '../WriteNewReviewContext.jsx';

const Recommend = () => {
  const [recommend, setRecommend] = useState(null);
  const [review, setReview] = useContext(WriteReviewContext);
  const consoleThis = () => (
    console.log(review)
  );

  return (
    <div>
      <label>
        Would You Recommend This Product?
        <br />
        <input
          type="radio"
          name="recommend"
          onClick={() => {
            setRecommend(true);
          }}
        />
        Yes
        <br />
        <input
          type="radio"
          name="recommend"
          onClick={() => {
            setRecommend(false);
            // setReview(review.recommend = recommend);
            consoleThis();
          }}
        />
        No
      </label>
    </div>
  );
};
export default Recommend;

// const [isRecommended, setRecommended] = useState(null);
// const [review, setReview] = useContext(WriteReviewContext);

// const updateRecommended = (event) => {
//   setRecommended();
// };

// const updateReview = (event) => {
//   setReview();
// };
