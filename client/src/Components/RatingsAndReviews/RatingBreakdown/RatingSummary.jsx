/* eslint-disable import/extensions */
/* eslint-disable radix */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

const Container = styled.div`
  width: 310px;
  margin: 10px;
  background-color: #02475E;
  border: 1px solid #black;
  box-shadow: 6px 4px black;
  outline: 0;
`;

const Score = styled.div`
  position: relative;
  height: 60px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  text-align: right;
  top: -10px;
  left: -20px;
  color: white;
  text-shadow: 2px 2px black;
`;

const BananaDiv = styled.div`
  font-family: Helvetica;
  float: left;
  padding-top: 12px;
  padding-left: 10px;
  color: grey;
`;

const Review = styled.p`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
`;

const RatingSummary = () => {
  const [breakdown] = useContext(ReviewBreakdownContext);
  let totalReviews = 0;
  const getAverage = (object) => {
    let total = 0;
    let length = 0;
    Object.entries(object).forEach((entry) => {
      const [key, value] = entry;
      length += parseInt(value);
      total += key * parseInt(value);
    });
    totalReviews = length;
    return total / length;
  };
  const selectedStars = Math.round(getAverage(breakdown.ratings) * 2) / 2;

  const halfStarMaker = (num) => [...Array(5)].map((star, i) => {
    if (i < num && i + 1 > num) {
      return <BsStarHalf size={30} color="#C0FEFC" />;
    }
    if (i < num) {
      return <BsStarFill size={30} color="#C0FEFC" />;
    }
    return <BsStar size={30} color="#C0FEFC" />;
  });

  return (
    <div>
      <Container>
        <BananaDiv>
          {halfStarMaker(selectedStars)}
        </BananaDiv>
        <Score>
          {(parseFloat(getAverage(breakdown.ratings)).toFixed(1))}
        </Score>
      </Container>
      <Review>
        {`This average is based on ${totalReviews} reviews`}
      </Review>
    </div>
  );
};

export default RatingSummary;
