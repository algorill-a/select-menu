import React, { useContext } from 'react';
import { WriteReviewContext } from '../WriteNewReviewContext.jsx';

const reviewThree = () => {
  const [review, setReview] = useContext(WriteReviewContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  return (
    <fieldset>
      <h3>Personal Information</h3>
      <label>
        <input
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
      <label>
        <input
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
