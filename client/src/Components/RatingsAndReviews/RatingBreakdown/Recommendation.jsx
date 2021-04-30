/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 17px;
  width: 30px;
`;

const Container = styled.div`
  display: grid;
  width: 50px;
  height: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  box-shadow: 3px 4px black;
  background-color: white;
  grid-template-columns: repeat(2, 1fr);
  gird-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  font-size: 20px;
`;

const Key = styled.div`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px
  font-size: 40px;
  font-weight: bold;
  color: black;
  grid-area: 1 / 1 / 2 / 3;
`;

const Star = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  color: #595850;
`;

const Score = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: Helvetica;
  color: black;
  grid-area: 2 / 2 / 3 / 3;
`;

const Recommendation = () => {
  const [breakdown] = useContext(ReviewBreakdownContext);

  return (
    <Div>
      {Object.entries(breakdown.characteristics).map((entries) => {
        const [key, value] = entries;
        return (
          <Container>
            <Key>{key}</Key>
            <br />
            <Star>
              <GiBananaPeeled
                size={30}
                key={Math.floor(Math.random() * 10000)}
              />
            </Star>
            <Score>{parseFloat(value.value).toFixed(1)}</Score>
          </Container>
        );
      })}
    </Div>
  );
};

export default Recommendation;
