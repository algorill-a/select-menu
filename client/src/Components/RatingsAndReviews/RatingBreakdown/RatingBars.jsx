import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

const Ul = styled.div`
  padding-bottom: 20px;
`;

const Span = styled.span`
  padding-left: 6px;
  padding-right: 6px;
  font-size: 15px;
  color: black;
`;

const Li = styled.li`
  list-style-type: none;
  font-family: Helvetica;
  font-size: 20px;
  padding-top: 10px;
  color: rgba(26, 117, 62);
  font-weight: bold;
`;

const Background = styled.div`
  position: absolute;
  background: blue;
`;

const Percent = styled.div`
  font-family: Helvetica;
  color: grey;
`;

const PercentBar = styled.progress`
  color: black;
  background: yellow;
`;

const Key = styled.div`
  font-family: Helvetica;
`;

const Label = styled.label`
`;

const RatingBars = () => {
  const [breakdown, setBreakdown] = useContext(ReviewBreakdownContext);
  const [starRating, setStarRating] = useState(
    {
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    },
  );

  const container = [];

  const getTotal = () => {
    let total = 0;
    Object.values(breakdown.ratings).forEach((value) => {
      total += parseInt(value);
      container.push(parseInt(value));
    });
    return total;
  };

  const recommendTotal = () => {
    let total = 0;
    Object.values(breakdown.recommend).forEach((value) => {
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
    return (recommended / total) * 100;
  };

  const getIndivPercentage = (score) => {
    let total = 0;
    Object.entries(breakdown.recommended).forEach((number) => {
      const [key, value] = number;
      total += parseInt(value);
    });
    return (score / total) * 100;
  };

  return (
    <>
      <Percent>
        {`${getPercentage()}% recommend this product`}
      </Percent>

      <Ul>
        {Object.entries(breakdown.ratings).slice(0).reverse().map((rating) => {
          const [key, value] = rating;
          return (
            <Li key={Math.random()}>
              {key}
              <Span>Bananas</Span>
              <Label>
                <PercentBar value={value} max={getTotal()} />
                {` ${getIndivPercentage(value)}%`}
              </Label>
            </Li>
          );
        })}
      </Ul>
    </>
  );
};

export default RatingBars;

// {Object.entries(breakdown.ratings).slice(0).reverse().map((rating) => {
//         const [key, value] = rating;
//         console.log(getTotal());
//         return (
//           <li key={Math.random()}>
//             {key}
//             Stars
//             <label>
//               <progress value={value} max={getTotal()} />
//             </label>
//           </li>
//         );
//       })}
