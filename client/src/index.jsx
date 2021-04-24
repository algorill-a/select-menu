/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';

const App = () => (
  <div>
    <RatingsAndReviews />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
