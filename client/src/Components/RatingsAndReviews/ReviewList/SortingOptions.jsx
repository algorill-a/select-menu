/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReviewListContext } from '../Context/ReviewListContext.jsx';

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
  padding: 0;
`;

const Li = styled.li`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: bold;
  display: inline;
  width: 90%;
  padding-top: .5vh;
  text-align: center;
  background: rgb(26, 116, 61);
  color: rgb(252, 255, 147);
  border: 2px solid rgb(215, 225, 215);
  border-radius: 25px;
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
    console.log(list);
    setList(list.slice());
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
