/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import ReviewPartOne from './reviewOne/ReviewOne.jsx';
import ReviewPartTwo from './ReviewTwo.jsx';
import ReviewPartThree from './ReviewThree.jsx';
import { WriteReviewContext } from '../Context/WriteNewReviewContext.jsx';
import { ReviewListContext } from '../Context/ReviewListContext.jsx';
import { ModalContext } from '../../../contexts/ModalContext.jsx';
import { MainContext } from '../../../contexts/MainContextProvider.jsx';

// Modal styled components
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
`;

const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  width: 60%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 900;
  padding: 40px;
`;

const CloseIcon = styled.div`
  left: 90%;
  position: absolute;
  background-color: grey;
  border: 2px solid black;
  opacity: 0.33;
  &: hover{
    opacity: 1;
  }
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
`;

const WriteNewReview = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const { real } = useContext(ReviewListContext);
  const { setList } = real;
  const { currProduct } = useContext(MainContext);
  const { reviewDisplay, toggleReviewModal } = useContext(ModalContext);
  const [review, setReview] = reviewData;
  const productId = currProduct.currProd;

  const getList = () => {
    axios.get(`/api/reviews?product_id=${productId}&count=10`)
      .then((response) => setList(response.data.results))
      .catch((error) => console.log(error));
  };

  const handlePostSuccess = () => {
    setReview({
      product_id: null,
      rating: null,
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
    });
    getList();
  };

  const handlePostSubmit = () => axios({
    method: 'post',
    url: '/api/reviews',
    data: review,
  })
    .then(() => handlePostSuccess)
    .catch((error) => console.log(error));

  const handleClick = () => {
    handlePostSubmit();
    toggleReviewModal();
  };

  useEffect(getList, [review]);

  return reviewDisplay ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleReviewModal}><AiOutlineClose size={40} /></CloseIcon>
        <ReviewPartOne />
        <ReviewPartTwo />
        <ReviewPartThree />
        <Button type="button" onClick={handleClick}>Submit</Button>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default WriteNewReview;
