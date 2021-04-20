/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';

const App = () => (
  <div>
    <h1>Hello CareThree!!!</h1>
    <RatingsAndReviews />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
