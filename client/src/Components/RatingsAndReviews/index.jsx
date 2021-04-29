/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import SortingOptions from './SortingOptions.jsx';
import WriteNewReview from './WriteNewReview/index.jsx';
import { ReviewListContext } from './Context/ReviewListContext.jsx';
import { MainContext } from '../../contexts/MainContextProvider.jsx';
import { ReviewButtonContext } from '../../contexts/ReviewButtonContext.jsx';
import { ModalContext } from '../../contexts/ModalContext.jsx';

const Container = styled.div`
  height: 50vh;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vh;
  padding: 5vh;
  font-family: 'Montserrat',sans-serif;
`;

const EmptyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0px;
  margin: 0px;
  border: 1px solid black;
  font-family: 'Montserrat',sans-serif;
  letter-spacing: 4px;
`;

const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  margin-top: 5em;
  margin-left: 8em;
`;
const TextContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  font-size: 3em;
  font-weight: bold;
  color: #0d555f;
`;

// const Img = styled.img`
//   grid-area: 1 / 2 / 2 / 3;
//   left: 50%;
//   width: 50vw;
//   height: 60vh;
//   z-index: -1;
// `;

const Text = styled.div``;
const Text2 = styled.div``;
const Text3 = styled.div``;

const Button = styled.button`
  padding: 15px;
  margin: 15px;
  color: black;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 8px
  background-color: #f2f2f2;
  font-size: 17px;
  font-weight: bold;
  border: 2px solid black;
  box-shadow: 1px 3px 3px #5B5347;
  outline: 0;
  &:active {
    background-color: black;
    color: white;
    box-shadow: 1px 3px 3px #5F939A;
  }
  &:hover {
    border: 2px solid #00bee8;
    box-shadow: 2px 5px 5px #00bee8;
  }
`;

const DivOne = styled.div`
  grid-area: 1 / 1 / 3 / 2;
`;

const DivTwo = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  height: 50vh;
  overflow: scroll;
`;

const DivThree = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  padding: 10px 0px;
  box-shadow: 0 4px 2px -2px gray;
`;

const DivFour = styled.div`
  grid-area: 3 / 2 / 4 / 3;
`;

const RatingsAndReviews = () => {
  const [list, setList] = useContext(ReviewListContext);
  const { currProduct } = useContext(MainContext);
  const { counts } = useContext(ReviewButtonContext);
  const [count, setCount] = counts;
  const productId = currProduct.currProd;

  const getList = () => {
    axios.get(`/api/reviews?product_id=${productId}&count=10`)
      .then((response) => setList(response.data.results))
      .catch((error) => console.log(error));
  };
  useEffect(getList, [currProduct]);
  const { toggleReviewModal } = useContext(ModalContext);

  const incrementCount = () => {
    setCount(count + 2);
    console.log(count);
  };

  const renderConditionList = () => {
    if (list.length === 0) {
      return (
        <EmptyContainer>
          <TextContainer>
            <Text>Looks like there are</Text>
            <Text2>no reviews</Text2>
            <Text3>for this product</Text3>
          </TextContainer>
        </EmptyContainer>
      );
    }
    return (
      <div>
        <Title>Ratings and Reviews</Title>
        <Container>
          <DivOne className="one">
            <RatingBreakdown />
          </DivOne>

          <DivTwo className="two">
            <ReviewList />
          </DivTwo>

          <DivThree>
            <SortingOptions />
          </DivThree>

          <DivFour>
            <WriteNewReview />
            <Button type="button" onClick={incrementCount}>Read More Reviews</Button>
            <Button type="button" onClick={toggleReviewModal}>Add Review</Button>
          </DivFour>
        </Container>
      </div>
    );
  };
  return (
    renderConditionList()
  );
};
export default RatingsAndReviews;
