/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewPartOne from './reviewOne/ReviewOne.jsx';
import ReviewPartTwo from './ReviewTwo.jsx';
import ReviewPartThree from './ReviewThree.jsx';
import { WriteReviewContext } from '../Context/WriteNewReviewContext.jsx';

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

const Container = styled.div`

`;

const WriteNewReview = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const [review, setReview] = reviewData;

  const handlePostSubmit = () => axios({
    method: 'post',
    url: '/api/reviews',
    data: review,
  })
    .then(() => setReview({
      product_id: null,
      rating: null,
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
    }))
    .catch((error) => console.log(error));

  return (
    <Container>
      <ReviewPartOne />
      <ReviewPartTwo />
      <ReviewPartThree />
      <Button type="button" onClick={handlePostSubmit}>Submit</Button>
    </Container>
  );
};

export default WriteNewReview;
