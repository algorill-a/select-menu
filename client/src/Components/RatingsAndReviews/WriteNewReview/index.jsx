/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import ReviewPartOne from './reviewOne/ReviewOne.jsx';
import ReviewPartTwo from './ReviewTwo.jsx';
import ReviewPartThree from './ReviewThree.jsx';
import { WriteReviewContext } from '../Context/WriteNewReviewContext.jsx';
import { ModalContext } from '../../../contexts/ModalContext.jsx';

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
  z-index: 101;
  padding: 40px;
`;

const CloseIcon = styled.div`
  text-align: right;
`;

const WriteNewReview = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const { reviewDisplay, toggleReviewModal } = useContext(ModalContext);
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

  return reviewDisplay ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleReviewModal}><AiOutlineClose /></CloseIcon>
        <form>
          <ReviewPartOne onClick={() => console.log(review)} />
          <ReviewPartTwo />
          <ReviewPartThree />
          <button type="button" onClick={handlePostSubmit}>Submit</button>
        </form>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default WriteNewReview;
