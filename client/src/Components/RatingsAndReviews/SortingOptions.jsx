import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReviewListContext } from './Context/ReviewListContext';

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
  padding-left: 10px;
  text-align: center;
`;

const SortingOptions = () => {
  const { real, copy } = useContext(ReviewListContext);
  const [list] = real;
  const [dupeList, setDupeList] = copy;

  const sortByHelpful = () => {
    setDupeList(list.slice().sort((a, b) => b.helpfulness - a.helpfulness));
    console.log('this is list', list);
    console.log('this is dupelist', dupeList);
  };

  const sortByDate = () => {
    setDupeList(list.slice().sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const sortByRelevance = () => {
    setDupeList(list.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
      .sort((a, b) => (b.date === a.date
        ? (b.helpfulness - a.helpfulness) : null)));
  };

  const filterByNumber = (event) => {
    const { value } = event.target;
    setDupeList(list);
    setDupeList(list.slice().filter((review) => review.rating === parseInt(value, 10)));
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    if (value === 'Helpful') {
      sortByHelpful();
    }
    if (value === 'Newest') {
      sortByDate();
    }
    if (value === 'Relevance') {
      sortByRelevance();
    }
  };

  return (
    <Container>
      <Select onChange={filterByNumber}>
        {[...Array(5)].map((rating, i) => {
          const index = `${i + 1}`;
          return (
            <Option value={index}>
              {index}
              {' '}
              Bananas
            </Option>
          );
        })}
      </Select>
      <Select onChange={handleOnChange}>
        <Option value="Helpful">Helpful</Option>
        <Option value="Newest">Newest</Option>
        <Option value="Relevance">Relevant</Option>
      </Select>
    </Container>
  );
};

export default SortingOptions;
