import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ReviewListContext = createContext();

const ReviewListProvider = (props) => {
  const { children } = props;
  const [list, setList] = useState([]);
  const [dupeList, setDupeList] = useState([]);

  return (
    <ReviewListContext.Provider
      value={{
        real: [list, setList],
        copy: [dupeList, setDupeList],
      }}
    >
      {children}
    </ReviewListContext.Provider>
  );
};

export default ReviewListProvider;

ReviewListProvider.propTypes = {
  children: PropTypes.shape({
    real: PropTypes.node,
    copy: PropTypes.node,
  }),
};

ReviewListProvider.defaultProps = {
  children: 'there are no children',
};
