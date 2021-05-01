import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Progress = styled.div`
  width: 90%;
  border: 1px solid black;
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
  width: ${({ value }) => value}%;
`;

const RatingBar = ({ title, value }) => (
  <Li key={Math.random()}>
    <Span>{title}</Span>
    <Text>
      Stars
    </Text>
    <Progress>
      <PercentBar>{`${value}%`}</PercentBar>
      <Bar value={value} />
    </Progress>
  </Li>
);

export default RatingBar;

RatingBar.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
