/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Characteristics from './Characteristics.jsx';
import OverallRating from './OverallRating.jsx';
import Recommend from './Recommend.jsx';

const ReviewPartOne = () => (
  <fieldset>
    <OverallRating />
    <br />
    <Recommend />
    <br />
    <Characteristics />
  </fieldset>
);

export default ReviewPartOne;
