import React, { useState, useContext } from 'react';
import { WriteReviewContext } from '../../Context/WriteNewReviewContext';

const Recommend = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const [review, setReview] = reviewData;
  const [recommend] = useState(true);

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
