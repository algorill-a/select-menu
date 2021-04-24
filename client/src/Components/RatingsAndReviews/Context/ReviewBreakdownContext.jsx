/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';

export const ReviewBreakdownContext = createContext();

const ReviewBreakdownProvider = (props) => {
  const [breakdown, setBreakdown] = useState({});
  return (
    <ReviewBreakdownContext.Provider value={[breakdown, setBreakdown]}>
      {props.children}
    </ReviewBreakdownContext.Provider>
  );
};

export default ReviewBreakdownProvider;
