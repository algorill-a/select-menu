import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ReviewBreakdownContext = createContext();

const ReviewBreakdownProvider = (props) => {
  const { children } = props;
  const [breakdown, setBreakdown] = useState({});
  return (
    <ReviewBreakdownContext.Provider value={[breakdown, setBreakdown]}>
      {children}
    </ReviewBreakdownContext.Provider>
  );
};

export default ReviewBreakdownProvider;

ReviewBreakdownProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
