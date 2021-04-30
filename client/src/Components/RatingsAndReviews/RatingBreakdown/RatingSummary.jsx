/* eslint-disable no-nested-ternary */
/* eslint-disable import/extensions */
/* eslint-disable radix */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 75%;
  background-color: #02475E;
  border: 1px solid #black;
  box-shadow: 6px 4px black;
  outline: 0;
`;

const Score = styled.div`
  grid-area: 1 / 2 / 4 / 3;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  text-align: right;
  color: white;
  text-shadow: 2px 2px black;
  margin-right: 10px;
`;

const BananaDiv = styled.div`
  display: grid;
  grid-area: 2 / 1 / 3 / 2;
  font-family: Helvetica;
`;

const FillerSpaceOne = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

const FillerSpaceTwo = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 25px;
`;

const Review = styled.p`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
`;

const FullStars = styled.span`
  position: relative;
  margin-top: 10px;
  opacity: 50%;
  z-index: 0;
  color: #d6d6d6;
`;

const Rating = styled.span`
  position: absolute;
  margin-top: 10px;
  z-index: 1;
`;

const Star = styled.div`
  position: absolute;
  clip: ${(props) => (props.percent > 0 && props.percent <= 25 ? 'rect(0px, 7px, 25px, 0px)'
    : props.percent > 25 && props.percent <= 50 ? 'rect(0px, 13px, 25px, 0px)'
      : props.percent > 50 && props.percent <= 75 ? 'rect(0px, 17px, 25px, 0px)'
        : 'rect(0px, 25px, 25px, 0px)')}
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
  const fullStarCount = Math.floor(selectedStars);
  const percentStar = ((breakdown.ratings - Math.floor(breakdown.ratings)) * 100).toFixed(0);

  return (
    <div>
      <H3>Banana Score</H3>
      <Container>
        <BananaDiv>
          <FullStars>
            {[...Array(5)].map((star) => (
              <GiBananaPeeled
                size={30}
                name={star}
              />
            ))}
          </FullStars>
          <Rating>
            {fullStarCount > 0 ? ([...Array(fullStarCount)].map((star) => <GiBananaPeeled size={30} color="#20afe3" name={star} />)) : null}
            {percentStar > 0 ? (<Star star={fullStarCount} percent={percentStar}><GiBananaPeeled size={30} color="#20afe3" /></Star>) : null}
          </Rating>
        </BananaDiv>
        <Score>
          {(parseFloat(getAverage(breakdown.ratings)).toFixed(1))}
        </Score>
        <FillerSpaceOne />
        <FillerSpaceTwo />
      </Container>
      <Review>
        {`This average is based on ${totalReviews} reviews`}
      </Review>
    </div>
  );
};

export default RatingSummary;
