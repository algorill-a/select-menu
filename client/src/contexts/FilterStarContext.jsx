/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, createContext } from 'react';

export const FilterStarContext = createContext();

const FilterStarProvider = (props) => {
  const [starRating, setStarRating] = useState(0);
  return (
    <FilterStarContext.Provider value={[starRating, setStarRating]}>
      {props.children}
    </FilterStarContext.Provider>
  );
};

export default FilterStarProvider;
