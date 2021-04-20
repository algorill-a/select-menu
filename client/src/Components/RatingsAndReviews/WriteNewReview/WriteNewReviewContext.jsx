/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';

export const WriteReviewContext = createContext();

const WriteReviewProvider = (props) => {
  const [review, setReview] = useState({
    product_id: 1345,
    rating: 5,
    summary: 'Hello I\'m a summary',
    body: 'Hello this is a body blah blah blah',
    recommend: false,
    name: 'Mark',
    email: 'Mark@fakemail.com',
    characteristics: 'blah blah',
  });
  return (
    <WriteReviewContext.Provider value={[review, setReview]}>
      {props.children}
    </WriteReviewContext.Provider>
  );
};

export default WriteReviewProvider;
