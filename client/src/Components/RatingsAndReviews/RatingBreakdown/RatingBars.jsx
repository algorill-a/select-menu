/* eslint-disable import/extensions */
/* eslint-disable radix */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';
import { ReviewListContext } from '../Context/ReviewListContext.jsx';

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

const PercentBar = styled.progress`
  color: black;
  background: yellow;
`;

const Label = styled.label`
`;

const RatingBars = () => {
  const [breakdown] = useContext(ReviewBreakdownContext);
  const [list, setList] = useContext(ReviewListContext);
  const [star, setStar] = useState(null);
  const [starRating, setStarRating] = useState(
    {
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    },
  );
  const filterListByStar = (num) => {
    setList(list.slice().filter((item) => item.rating === num));
  };

  const anon = (num) => {
    setStar(num);
    filterListByStar(num);
  };

  const getTotal = () => {
    let total = 0;
    Object.values(breakdown.ratings).forEach((value) => {
      total += parseInt(value);
    });
    return total;
  };

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
    return Math.floor((score / total) * 100);
  };

  const changeStarRatings = () => {
    Object.entries(breakdown.ratings).forEach((entry) => {
      const [key, value] = entry;
      setStarRating((prevRating) => ({ ...prevRating, [key]: value }));
    });
  };
  useEffect(() => changeStarRatings(), []);

  return (
    <>
      <Percent>
        {`${parseInt(getPercentage())}% recommend this product`}
      </Percent>

      <Ul>
        {Object.entries(starRating).slice(0).reverse().map((rating) => {
          const [key, value] = rating;
          return (
            <Li key={Math.random()}>
              <Span>{key}</Span>
              <Text onClick={console.log('hello')}>
                Bananas
              </Text>
              <Label>
                <PercentBar value={value} max={getTotal()} />
                {` ${getIndivPercentage(parseFloat(value))}%`}
              </Label>
            </Li>
          );
        })}
      </Ul>
    </>
  );
};

export default RatingBars;
