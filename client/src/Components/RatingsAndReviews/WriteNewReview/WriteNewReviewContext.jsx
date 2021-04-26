/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';

export const WriteReviewContext = createContext();

const WriteReviewProvider = (props) => {
  const [review, setReview] = useState({
    product_id: null,
    rating: null,
    summary: '',
    body: '',
    recommend: null,
    name: '',
    email: '',
    characteristics: {
      Size: {
        value: null,
      },
      Width: {
        value: null,
      },
      Comfort: {
        value: null,
      },
      Quality: {
        value: null,
      },
      Length: {
        value: null,
      },
      Fit: {
        value: null,
      },
    },
  });
  return (
    <WriteReviewContext.Provider value={[review, setReview]}>
      {props.children}
    </WriteReviewContext.Provider>
  );
};

export default WriteReviewProvider;
