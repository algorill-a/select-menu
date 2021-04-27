/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
import { WriteReviewContext } from '../../Context/WriteNewReviewContext.jsx';

const Recommend = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const [review, setReview] = reviewData;
  const [recommend, setRecommend] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value === 'true') {
      setReview({ ...review, [name]: recommend });
    } else {
      setReview({ ...review, [name]: !recommend });
    }
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
          onClick={handleChange}
        />
        Yes
        <br />
        <input
          type="radio"
          name="recommend"
          value={!recommend}
          onClick={handleChange}
        />
        No
      </label>
    </div>
  );
};
export default Recommend;
