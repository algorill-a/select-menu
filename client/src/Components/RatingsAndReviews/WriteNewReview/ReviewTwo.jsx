/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { WriteReviewContext } from '../Context/WriteNewReviewContext.jsx';

const Input = styled.input`
  width: 50%;
`;

const Textarea = styled.textarea`
  width: 50%;
  height: 80%;
`;

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
      <label htmlFor="summary">
        <br />
        <Input
          type="text"
          name="summary"
          placeholder="Summary*"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <br />
      <label htmlFor="body">
        <Textarea
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
