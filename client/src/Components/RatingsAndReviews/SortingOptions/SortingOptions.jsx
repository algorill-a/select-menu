import React, { useContext } from 'react';
import { ReviewListContext } from '../Context/ReviewListContext.jsx';

const SortingOptions = () => {
  const [list, setList] = useContext(ReviewListContext);
    <ul>
      <li>Helpful</li>
      <li>Newest</li>
      <li>Relevant</li>
    </ul>;
};

export default SortingOptions;
