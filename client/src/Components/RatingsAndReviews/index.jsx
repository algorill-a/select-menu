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

const Container = styled.div`
  height: 50vh;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vh;
  padding: 5vh;
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
`;

const NoReviews = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const Img = styled.img`
  background-size: cover;
  border-radius: 15px;
  box-shadow: 2px 4px 6px green;
  width: 80%;
  height: 50%;
  z-index: -1;
`;

const TextContainer = styled.div`
  position: relative;
  font-size: 3em;
  left: 25%;
  top: 45%;
  font-family: Helvetica;
  color: white;
  text-shadow: 2px 2px 3px black;
`;

const Text = styled.div``;
const Text2 = styled.div``;
const Text3 = styled.div``;

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
  &:active {
    background-color: #03fc07;
    border: 2px solid #91ff93;
    color: #c8f745;
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
    axios.get(`/api/reviews?product_id=${productId}`)
      .then((response) => setList(response.data.results))
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
          <NoReviews>
            <TextContainer>
              <Text>Looks like there are</Text>
              <Text2>no reviews</Text2>
              <Text3>for this product</Text3>
            </TextContainer>
            <Img src="./monkey.gif" alt="" />
          </NoReviews>
        </EmptyContainer>
      );
    }

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

          <DivThree>
            <SortingOptions />
          </DivThree>

          <DivFour>
            <Button type="button" onClick={incrementCount}>Read More Reivews</Button>
            <Button type="button">Add Review</Button>
          </DivFour>
        </Container>

        {/* <WriteNewReview /> */}
      </div>
    );
  };

  return (
    renderConditionList()
  );
};

export default RatingsAndReviews;
