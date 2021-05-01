import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewList from './ReviewList/ReviewList';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import SortingOptions from './SortingOptions';
import WriteNewReview from './WriteNewReview/index';
import { ReviewListContext } from './Context/ReviewListContext';
import { MainContext } from '../../contexts/MainContextProvider';
import { ReviewButtonContext } from '../../contexts/ReviewButtonContext';
import { ModalContext } from '../../contexts/ModalContext';

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
  padding: 20px 20px;
  margin: 50px 0px;
  border-radius: 15px;
  background-color #02475e;
  font-family: 'Montserrat',sans-serif;
  letter-spacing: 4px;
`;

const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  margin-top: 5em;
  margin-left: 8em;
`;

const Text = styled.div`
  color: white;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  font-size: 4em;
`;

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
  height: 77vh;
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
  const { real, copy } = useContext(ReviewListContext);
  const [list, setList] = real;
  const [, setDupeList] = copy;
  const { currProduct } = useContext(MainContext);
  const { toggleReviewModal } = useContext(ModalContext);
  const { counts } = useContext(ReviewButtonContext);
  const [count, setCount] = counts;
  const productId = currProduct.currProd;

  const getList = () => {
    axios.get(`/api/reviews?product_id=${productId}&count=10`)
      .then((response) => {
        setList(response.data.results);
        setDupeList(response.data.results);
      })
      .catch((error) => console.log(error));
  };
  useEffect(getList, [currProduct]);

  const incrementCount = () => {
    setCount(count + 2);
    console.log(count);
  };

  const renderConditionList = () => {
    if (list.length === 0) {
      return (
        <EmptyContainer>
          <Text>Looks like there are no review for this product</Text>
        </EmptyContainer>
      );
    }
    return (
      <div>
        <Title className="ratings">Ratings and Reviews</Title>
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
