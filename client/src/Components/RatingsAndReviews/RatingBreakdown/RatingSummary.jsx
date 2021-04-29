/* eslint-disable import/extensions */
/* eslint-disable radix */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

const Container = styled.div`
  width: 310px;
  margin: 10px;
  background-color: #5F939A;
  border: 1px solid #black;
  box-shadow: 3px 5px #303030;
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
  color: black;
`;

const BananaDiv = styled.div`
  font-family: Helvetica;
  float: left;
  padding-top: 12px;
  padding-left: 10px;
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

  return (
    <div>
      <Container>
        <BananaDiv>
          {[...Array(5)].map((star, i) => (
            <GiBananaPeeled
              color={(i + 1)
              < getAverage(breakdown.ratings) ? '#C7C709' : '#818176'}
              size={30}
              key={Math.floor(Math.random() * 10000)}
            />
          ))}
        </BananaDiv>
        <Score>
          {parseFloat(getAverage(breakdown.ratings)).toFixed(1)}
        </Score>
      </Container>
      <Review>
        {`This average is based on ${totalReviews} reviews`}
      </Review>
    </div>
  );
};

export default RatingSummary;
