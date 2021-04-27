/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { WriteReviewContext } from '../Context/WriteNewReviewContext.jsx';

const ReviewTwo = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const [review, setReview] = reviewData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  return (
    <fieldset>
      <h3>Your Review</h3>
      <label>
        <br />
        <input
          type="text"
          name="summary"
          placeholder="Summary*"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <br />
      <label>
        <textarea
          type="text"
          name="body"
          rows="4"
          cols="50"
          minLength="50"
          maxLength="2500"
          onChange={handleChange}
          placeholder="Your Review*"
          required
        />
        <p>Let people know what you think of the product!</p>
      </label>
    </fieldset>
  );
};

export default ReviewTwo;
