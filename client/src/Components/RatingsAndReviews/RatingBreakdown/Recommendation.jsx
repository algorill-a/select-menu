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
  border-radius: 25px;
  box-shadow: 1px 2px 3px rgba(26, 117, 62);
  background-color: rgba(124, 155, 123, 0.3);
  grid-template-columns: repeat(2, 1fr);
  gird-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;


const Key = styled.div`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: bold;
  color: rgba(26, 117, 62);
  grid-area: 1 / 1 / 2 / 3;
`;

const Banana = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  color: #595850;
`;

const Score = styled.div`
  font-size: 25px;
  font-weight: bold;
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
            <Banana><GiBananaPeeled size={30} /></Banana>
            <Score>{parseFloat(value.value)}</Score>
          </Container>
        );
      })}
    </Div>
  );
};

export default Recommendation;
