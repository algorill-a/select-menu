/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';

export const ReviewListContext = createContext();

const ReviewListProvider = (props) => {
  const [list, setList] = useState([]);
  return (
    <ReviewListContext.Provider value={[list, setList]}>
      {props.children}
    </ReviewListContext.Provider>
  );
};

export default ReviewListProvider;
