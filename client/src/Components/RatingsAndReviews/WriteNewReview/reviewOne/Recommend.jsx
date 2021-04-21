/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
import { WriteReviewContext } from '../WriteNewReviewContext.jsx';

const Recommend = () => {
  const [recommend, setRecommend] = useState(true);
  const [review, setReview] = useContext(WriteReviewContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  return (
    <div>
      <label>
        Would You Recommend This Product?
        <br />
        <input
          type="radio"
          name="recommend"
          value={recommend}
          onChange={handleChange}
          onClick={() => {
            setRecommend(recommend);
          }}
        />
        Yes
        <br />
        <input
          type="radio"
          name="recommend"
          value={recommend}
          onClick={() => setRecommend(!recommend)}
          onChange={handleChange}
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
