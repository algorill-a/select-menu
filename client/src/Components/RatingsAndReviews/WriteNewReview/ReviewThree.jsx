/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { WriteReviewContext } from '../Context/WriteNewReviewContext.jsx';

const Input = styled.input`
  width: 50%;
`;

const reviewThree = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const [review, setReview] = reviewData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  return (
    <fieldset>
      <h3>Personal Information</h3>
      <label htmlFor="nickname">
        <Input
          type="text"
          name="name"
          placeholder="Nickname*"
          onChange={handleChange}
          required
        />
      </label>
      <p>
        Example: MarkIsCool25. Be mindful of your own privacy,
        do not use your full name or email address
      </p>
      <br />
      <label htmlFor="email">
        <Input
          type="text"
          name="email"
          placeholder="Email*"
          onChange={handleChange}
          required
        />
      </label>
      <p>Authentication only - we won't send you any marketing/promotional emails.</p>
    </fieldset>
  );
};

export default reviewThree;
