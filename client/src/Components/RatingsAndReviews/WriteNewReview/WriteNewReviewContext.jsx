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
      SIZE: 'Please Select',
      WIDTH: 'Please Select',
      COMFORT: 'Please Select',
      QUALITY: 'Please Select',
    },
  });
  return (
    <WriteReviewContext.Provider value={[review, setReview]}>
      {props.children}
    </WriteReviewContext.Provider>
  );
};

export default WriteReviewProvider;
