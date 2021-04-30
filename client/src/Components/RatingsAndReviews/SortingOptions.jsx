/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReviewListContext } from './Context/ReviewListContext.jsx';

const Container = styled.div`
  height: 5vh;
  width: 100%;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-tempalte-rows: 1fr;
  grid-column-gap: 50px;
  list-style-type: none;
  height: 5vh;
  margin: 0;
  padding-bottom: 10px;
  font-weight: 900;
  font-size: 2em;
  letter-spacing: 4px;
  color: black;
`;

const Li = styled.li`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px
  color: black;
  display: inline;
  width: 90%;
  padding-top: .5vh;
  text-align: center;
  border: 2px solid black;
  box-shadow: 3px 3px 3px grey;
  &:hover {
    border: 2px solid #00bee8;
    box-shadow: 2px 5px 5px #00bee8;
  }
`;

const SortingOptions = () => {
  const [list, setList] = useContext(ReviewListContext);

  const filterByHelpful = () => {
    setList(list.slice().sort((a, b) => b.helpfulness - a.helpfulness));
  };

  const filterByDate = () => {
    setList(list.slice().sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const filterByRelevance = () => {
    setList(list.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
      .sort((a, b) => (b.date === a.date
        ? (b.helpfulness - a.helpfulness) : null)));
  };

  return (
    <Container>
      <Ul>
        <Li onClick={filterByHelpful}>Helpful</Li>
        <Li onClick={filterByDate}>Newest</Li>
        <Li onClick={filterByRelevance}>Relevant</Li>
      </Ul>
    </Container>
  );
};

export default SortingOptions;
