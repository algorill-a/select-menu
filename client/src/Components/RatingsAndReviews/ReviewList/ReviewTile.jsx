/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { GiBananaPeeled, GiGorilla } from 'react-icons/gi';

// grid-template-area:
//   'banana-user-date'
//   'summary'
//   'body'
//   'heplful';

const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr) 2fr 1fr;
  grid-column-gap: 20px;
  height: 30vh;
  background-color: rgba(207, 188, 188, 0.3)
  border-bottom: 1px solid #EEEEEE;
  box-shadow: 1px 2px #D8D8D8;
`;

const StarDiv = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  padding-top: 10px;
  font-family: Helvetica;
  float: left;
`;

const UserNameDiv = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const UserTimeDiv = styled.div`
    grid-area: grid 1 / 3 / 2 / 4;
    font-family: Helvetica;
    float: right;
    font-size: 12px;
  `;

const Summary = styled.div`
    grid-area: 2 / 1 / 3 / 4;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: bold;
    color: #341D02;
  `;

const Body = styled.div`
    grid-area: 3 / 1 / 4 / 4;
    font-family: Helvetica;
    font-size: 13px;
  `;
const RecommendDiv = styled.div`
    font-family: 'Helvetica';
    grid-area: 4 / 1 / 5 / 4;
  `;
const ResponseDiv = styled.div`
    font-family: Helvetica;
    grid-area: 5 / 1 / 6 / 4;
    font-size: 13px;
    background-color: rgba(124, 155, 123, 0.3);
    border-radius: 15px;
  `;

const HelpfulDiv = styled.div`
    font-family: Helvetica;
    grid-area: 6 / 1 / 7 /  4;
    font-weight: 100;
    font-size: 10px;
  `;

const Span = styled.span`
    padding-right: 10px;
    font-size: bold;
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

    <UserNameDiv>
      {tile.reviewer_name}
    </UserNameDiv>

    <UserTimeDiv>
      {moment(tile.date).format('MMMM Do YYYY')}
    </UserTimeDiv>

    <Summary>
      {tile.summary}
    </Summary>

    <Body>
      {tile.body}
    </Body>

    <RecommendDiv>
      <GiGorilla size={30} />
      {JSON.stringify(tile.recommend) === 'true' ? ' | Gorilla approved' : null}
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
