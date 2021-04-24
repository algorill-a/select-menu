/* eslint-disable radix */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

const Container = styled.div`
  width: 310px;
  margin: 10px;
  background-color: rgba(26, 117, 62);
  border: 2px solid #196838;
  border-radius: 15px;;
  box-shadow: 1px 3px 3px #5B5347;
  outline: 0;
`;

const Score = styled.div`
  position: relative;
  height: 60px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 70px;
  text-align: right;
  top: -20px;
  left: -20px;
  color: #FDFF93;
`;

const BananaDiv = styled.div`
  font-family: Helvetica;
  float: left;
  padding-top: 13px;
  padding-left: 10px;
`;

const Title = styled.div`
  color: #FDFF93;
  font-size: 30px;
  font-weight: bold;
  padding-left: 10px;
`;

const Review = styled.p`
  font-size: 20px;
  color: #FDFF93;
  padding-left: 15px;
  margin: 0;
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

  return (
    <>
      <Container>
        <Title>Banana Score</Title>
        <BananaDiv>
          {[...Array(5)].map((star, i) => (
            <GiBananaPeeled
              color={(i + 1) < getAverage(breakdown.ratings) ? '#C7C709' : '#818176'}
              size={30}
            />
          ))}
        </BananaDiv>
        <Score>
          {getAverage(breakdown.ratings)}
        </Score>
        <Review>
          {`This average is based on ${totalReviews} reviews`}
        </Review>
      </Container>
    </>
  );
};

export default RatingSummary;
