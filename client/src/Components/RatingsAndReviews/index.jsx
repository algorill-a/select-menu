/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import WriteNewReview from './WriteNewReview/index.jsx';
import ReviewListProvider from './Context/ReviewListContext.jsx';
import ReviewBreakdownProvider from './Context/ReviewBreakdownContext.jsx';

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

const DivOne = styled.div`
  grid-area: sidebar;
`;

const DivTwo = styled.div`
  grid-area: header;
  padding: 0;
`;

const DivThree = styled.div`
  grid-area: content;
  height: 76vh;
`;

const RatingsAndReviews = () => (
  <div>
    <h1>Ratings and Reviews</h1>
    <Container>
      <DivOne className="one">
        <ReviewBreakdownProvider>
          <RatingBreakdown />
        </ReviewBreakdownProvider>
      </DivOne>

      <DivThree className="two">
        <ReviewListProvider>
          <ReviewList />
        </ReviewListProvider>
      </DivThree>
    </Container>
    <WriteNewReview />
  </div>
);

export default RatingsAndReviews;
