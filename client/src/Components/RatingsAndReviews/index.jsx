/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import WriteNewReview from './WriteNewReview/index.jsx';
import { ReviewListContext } from './Context/ReviewListContext.jsx';

const Container = styled.div`
  height: 50vh;
  display: grid;
  grid-template-areas:
    'sidebar header'
    'sidebar content';
  grid-template-rows: 1fr 6fr;
  grid-template-columns: 2fr 7fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vh;
  padding: 5vh;
`;

const Button = styled.button`
  padding: 15px;
  margin: 15px;
  color: #FDFF93;
  background-color: rgba(26, 117, 62);
  font-size: 17px;
  font-weight: bold;
  border: 2px solid #196838;
  border-radius: 15px;;
  box-shadow: 1px 3px 3px #5B5347;
  outline: 0;
`;

const DivOne = styled.div`
  grid-area: sidebar;
`;

// const DivTwo = styled.div`
//   grid-area: header;
//   padding: 0;
// `;

const DivTwo = styled.div`
  grid-area: content;
  height: 76vh;
`;
const count = 2;

const RatingsAndReviews = () => {
  const [list, setList] = useContext(ReviewListContext);
  const [toggle, setToggle] = useState(false);

  const toggleSearch = () => {
    setToggle(!toggle);
  };

  const renderList = () => {
    if (toggle) {
      return list.slice(0, count + 2);
    }
    return list.slice(0, count);
  };

  return (
    <div>
      <h1>Ratings and Reviews</h1>
      <Container>
        <DivOne className="one">
          <RatingBreakdown />
        </DivOne>

        <DivTwo className="two">
          <ReviewList />
        </DivTwo>
      </Container>

      <WriteNewReview />
      <button type="button">Add Review</button>
      <Button type="button" onClick={toggleSearch}>{toggle ? 'Go Back' : 'Read more reviews'}</Button>
    </div>
  );
};

export default RatingsAndReviews;
