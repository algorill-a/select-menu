/* eslint-disable import/extensions */
/* eslint-disable radix */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

let percentage = [];

const Ul = styled.div`
  padding-bottom: 20px;
`;

const Span = styled.span`
  padding-left: 6px;
  padding-right: 6px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

const Text = styled.span`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
`;

const Li = styled.li`
  list-style-type: none;
  font-family: Helvetica;
  font-size: 15px;
  padding-top: 10px;
  color: black;
  font-weight: bold;
`;

const Percent = styled.div`
  font-family: Helvetica;
  color: grey;
`;

const Progress = styled.div`
  width: 90%;
  border: 2px solid black;
  position: relative;
  padding: 3px;
`;

const PercentBar = styled.span`
  position: absolute;
  left: 50%;
`;

const Bar = styled.div`
    height: 20px;
    background-color: #20afe3;
    width: 30%;
`;

const RatingBars = () => {
  const [breakdown] = useContext(ReviewBreakdownContext);
  const [starRating, setStarRating] = useState(
    {
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    },
  );

  // const getTotal = () => {
  //   let total = 0;
  //   Object.values(breakdown.ratings).forEach((value) => {
  //     total += parseInt(value);
  //   });
  //   return total;
  // };

  const getPercentage = () => {
    let total = 0;
    let recommended = 0;

    Object.entries(breakdown.recommended).forEach((entry) => {
      const [key, value] = entry;
      total += parseInt(value);
      if (key === 'true') {
        recommended = parseInt(value);
      }
    });
    return Math.floor((recommended / total) * 100);
  };

  const getIndivPercentage = (score) => {
    let total = 0;
    Object.values(breakdown.recommended).forEach((number) => {
      total += parseInt(number);
    });
    const num = (score / total).toFixed(1);
    return Math.floor(num * 100);
  };

  const changeStarRatings = () => {
    Object.entries(breakdown.ratings).forEach((entry) => {
      const [key, value] = entry;
      setStarRating((prevRating) => ({ ...prevRating, [key]: value }));
    });
  };

  const updatePercentage = (value) => {
    percentage.push(getIndivPercentage(value));
    return getIndivPercentage(value);
  };

  useEffect(() => changeStarRatings(), []);

  return (
    <div>
      <Percent>
        {`${parseInt(getPercentage())}% recommend this product`}
      </Percent>

      <Ul>
        {Object.entries(starRating).slice(0).reverse().map((rating) => {
          const [key, value] = rating;
          return (
            <Li key={Math.random()}>
              <Span>{key}</Span>
              <Text>
                Stars
              </Text>
              <Progress>
                <PercentBar>{`${getIndivPercentage(value)}%`}</PercentBar>
                <Bar width={`30px`} />
              </Progress>
            </Li>
          );
        })}
      </Ul>
    </div>
  );
};

export default RatingBars;

// <PercentBar value={value} max={getTotal()} />
//               {` ${getIndivPercentage(value)}%`};

// console.log('this is number', number);
// console.log('this is total', total);
// console.log('this is score', score);
