/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { GiBananaPeeled } from 'react-icons/gi';

const StarDiv = styled.div`
  padding-top: 10px;
  font-family: Helvetica;
  float: left;
`;

const UserTimeDiv = styled.div`
    font-family: Helvetica;
    padding-right: 10px;
    padding-top: 10px;
    float: right;
    display: flex;
    font-size: 12px;
  `;

const ReviewNameDiv = styled.div`
    color: grey;
    font-family: Helvetica;
    padding-right: 10px;
    font-size: 12px;
    border-right: 1px solid rgba(166, 152, 152);
  `;

const DateDiv = styled.div`
    color: grey;
    padding-left: 10px;
  `;

const Summary = styled.div`
    font-family: Helvetica;
    font-size: 20px;
    font-weight: bold;
    padding-top: 30px;
    color: #341D02;
  `;

const Body = styled.div`
    font-family: Helvetica;
    padding-top: 20px;
    font-size: 13px;
  `;

const RecommendDiv = styled.div`
    font-family: 'Helvetica';
    padding-top: 10px;
    padding-bottom: 10px;
  `;

const ResponseDiv = styled.div`
    font-family: Helvetica;
    font-size: 13px;
    padding: 20px;
    background-color: rgba(124, 155, 123, 0.3);
    border-radius: 15px;
  `;

const HelpfulDiv = styled.div`
    font-family: Helvetica;
    font-weight: 100;
    font-size: 10px;
    padding: 10px;
  `;

const Span = styled.span`
    padding-right: 10px;
    font-size: bold;
  `;

const Container = styled.div`
  background-color: rgba(207, 188, 188, 0.3)
  border-bottom: 1px solid #EEEEEE;
  box-shadow: 1px 2px #D8D8D8;
  padding: 20px;
`;

const Bold = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: rgba(26, 117, 62);
`;

const ReviewTile = ({ tile }) => (
  <Container>
    <StarDiv>
      {[...Array(5)].map((star, i) => (
        <GiBananaPeeled
          color={(i + 1) < tile.rating ? '#C7C709' : '#e4e5e9'}
          size={16}
        />
      ))}
    </StarDiv>
    <UserTimeDiv>
      <ReviewNameDiv>{tile.reviewer_name}</ReviewNameDiv>
      <DateDiv>{moment(tile.date).format('MMMM Do YYYY')}</DateDiv>
    </UserTimeDiv>
    <div>
      <Summary>{tile.summary}</Summary>
      <Body>{tile.body}</Body>
    </div>
    <RecommendDiv>
      {JSON.stringify(tile.recommend) === 'true' ? 'X | I recommend this product' : null}
    </RecommendDiv>
    {tile.response ? (
      <ResponseDiv>
        <Bold>Response:</Bold>
        {tile.response}
      </ResponseDiv>
    ) : null}
    <HelpfulDiv>
      <Span>Helpful?</Span>
      Yes
      (
      {tile.helpfulness}
      )
    </HelpfulDiv>
  </Container>
);
export default ReviewTile;
