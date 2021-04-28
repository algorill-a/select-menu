/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';

export const ReviewButtonContext = createContext();

const ReviewButtonProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(2);

  const moreReviews = (array) => {
    if (toggle) {
      return array.slice(0, setCount(count + 2));
    }
    return array.slice(0, count);
  };

  return (
    <ReviewButtonContext.Provider value={
      {
        toggles: [toggle, setToggle],
        counts: [count, setCount],
      }
    }
    >
      {props.children}
    </ReviewButtonContext.Provider>
  );
};

export default ReviewButtonProvider;
