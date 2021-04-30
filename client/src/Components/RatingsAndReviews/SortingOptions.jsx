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

const Select = styled.select`
  list-style-type: none;
  float: right;
  height: 5vh;
  width: 25%;
  margin: 0;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  border: 1px solid black;
  box-shadow: 2px 3px black;
  color: black;
  outline: none;
  &: hover {
    border: 2px solid #00bee8;
    box-shadow: 2px 5px 5px #00bee8;
`;

const Option = styled.option`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px
  color: black;
  font-size: 2em;
  text-align: center;
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

  const handleOnChange = (event) => {
    const { value } = event.target;
    if (value === 'Helpful') {
      filterByHelpful();
    }
    if (value === 'Newest') {
      filterByDate();
    }
    if (value === 'Relevance') {
      filterByRelevance();
    }
  };

  return (
    <Container>
      <Select onChange={handleOnChange}>
        <Option value="Helpful">Helpful</Option>
        <Option value="Newest">Newest</Option>
        <Option value="Relevance">Relevant</Option>
      </Select>
    </Container>
  );
};

export default SortingOptions;
