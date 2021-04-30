/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import { BsStarFill } from 'react-icons/bs';

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
  float: left;
  font-family: 'Montserrat',sans-serif;
  letter-spacing: 4px;
`;

const UserNameDiv = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  padding-top: 10px;
  float: right;
  font-size: 11px;
`;

const UserTimeDiv = styled.div`
  grid-area: grid 1 / 2 / 2 / 4;
  padding-top 10px;
  float: right;
  font-size: 10px;
  font-family: 'Montserrat',sans-serif;
  letter-spacing: 4px;
  border-top: 1px solid black
`;

const Summary = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  width: 75%;
  font-family: 'Montserrat',sans-serif;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 4px;
  color: black;
  background: rgba(255, 255, 255, 0.8)
`;

const Body = styled.div`
  grid-area: 3 / 1 / 4 / 4;
  padding: 10px 0px;
  font-family: 'Montserrat',sans-serif;
  font-size: 13px;
  letter-spacing: 4px;
`;
const RecommendDiv = styled.div`
  grid-area: 4 / 1 / 5 / 4;
  font-family: 'Montserrat',sans-serif;
  letter-spacing: 4px;
`;
const ResponseDiv = styled.div`
  grid-area: 5 / 1 / 6 / 4;
  font-family: 'Montserrat',sans-serif;
  letter-spacing: 4px;
  font-size: 13px;
  border-radius: 15px;
  background-color: #9dd1e4;
`;

const Photo = styled.div`

`;

const HelpfulDiv = styled.div`
  grid-area: 6 / 1 / 7 /  4;
  font-family: 'Montserrat',sans-serif;
  font-weight: 100;
  font-size: 10px;
  letter-spacing: 4px;
`;

const Help = styled.span`

  &:hover {
    border-bottom: 1.5px solid black;
    width: 80px;
  }
  :focus {
    color: red;
  }
`;

const Report = styled.span`
  &:hover {
    border-bottom: 1.5px solid black;
    width: 80px;
  }
`;

const Span = styled.span`
  padding-right: 10px;
  font-weight: bold;
`;

const Bold = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const ReviewTile = ({ tile }) => {
  // const [helpful, setHelpful] = useState({ id: tile.review_id, helpfulness: tile.helpfulness });
  const [helpful, setHelpful] = useState(tile.helpfulness);

  const putHelpfulRequest = () => {
    axios({
      method: 'put',
      url: `/api/reviews/${tile.review_id}/helpful`,
    })
      .then(() => setHelpful(helpful + 1))
      .catch(() => console.log('fail'));
  };

  const putReportRequest = () => {
    axios({
      method: 'put',
      url: `/api/reviews/${tile.review_id}/report`,
    })
      .then(() => console.log('successful report'))
      .catch(() => console.log('fail'));
  };

  const handleReportClick = () => {
    putReportRequest();
  };

  return (
    <Container>
      <StarDiv>
        {[...Array(5)].map((star, i) => (
          <BsStarFill
            color={(i) < tile.rating ? '#20afe3' : '#3d3d3d'}
            size={16}
            key={Math.floor(Math.random() * 10000)}
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
        {JSON.stringify(tile.recommend) === 'true' ? ' | Gorilla approved' : null}
      </RecommendDiv>

      <Photo>
        {tile.photos.length > 0
          ? (
            tile.photos.map((photo) => (
              <Img className="review-photo" src={photo.url} alt={photo.id} />
            ))
          )
          : null}
      </Photo>

      {tile.response ? (
        <ResponseDiv>
          <Bold>Response:</Bold>
          {tile.response}
        </ResponseDiv>
      ) : null}

      <HelpfulDiv>
        <Span>Helpful?</Span>
        <Help onClick={() => setHelpful(putHelpfulRequest)} role="button" aria-hidden="true">
          Yes
          <span>{`(${helpful === undefined ? '' : helpful})`}</span>
        </Help>
        |
        <Report onClick={handleReportClick} role="button" aria-hidden="true">Report</Report>
      </HelpfulDiv>

    </Container>
  );
};
export default ReviewTile;
