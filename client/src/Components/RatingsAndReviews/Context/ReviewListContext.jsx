/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';

export const ReviewListContext = createContext();

const ReviewListProvider = (props) => {
  const [list, setList] = useState([]);
  const [dupeList, setDupeList] = useState([]);

  return (
    <ReviewListContext.Provider
      value={{
        real: [list, setList],
        copy: [dupeList, setDupeList],
      }}
    >
      {props.children}
    </ReviewListContext.Provider>
  );
};

export default ReviewListProvider;
