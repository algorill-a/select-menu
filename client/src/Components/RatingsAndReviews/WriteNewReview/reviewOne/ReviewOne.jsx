import React from 'react';
import styled from 'styled-components';
import Characteristics from './Characteristics';
import OverallRating from './OverallRating';
import Recommend from './Recommend';

const Container = styled.fieldset`
  display: grid;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  grid-template-columns: repeate(2, 1fr);
  grid-template-rows: 1fr 4fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 57.8vw;
  height: 70vh;
`;

const OR = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  margin: 0;
`;

const R = styled.div`
  grid-area: 1 / 2 / 2/ 3;
  padding-top: 5vh;
  padding-left: 9vh;
`;

const Chara = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  height: 40vh;
`;

const ReviewPartOne = () => (
  <Container>
    <OR>
      <OverallRating />
    </OR>
    <R>
      <Recommend />
    </R>
    <Chara>
      <Characteristics />
    </Chara>
  </Container>
);

export default ReviewPartOne;
