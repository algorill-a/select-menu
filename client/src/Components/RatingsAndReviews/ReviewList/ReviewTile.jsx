import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import PropTypes from 'prop-types';
import { GiBananaPeeled, GiGorilla } from 'react-icons/gi';

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr) 3fr 1fr 2fr repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  height: 40vh;
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
  grid-area: 6 / 1 / 7 / 4;
`;

const HelpfulDiv = styled.div`
  grid-area: 7 / 1 / 8 /  4;
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
  padding 0px 10px;
`;

const Recommend = styled.span`
  grid-area: 1 / 2 / 2 / 3;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;

const ReviewTile = ({ tile }) => {
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
          <GiBananaPeeled
            color={(i) < tile.rating ? '#20afe3' : '#d6d6d6'}
            size={20}
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
        <Recommend>
          {JSON.stringify(tile.recommend) === 'true'
            ? (
              <div>
                <GiGorilla size={30} color="#595850" />
                <span> | </span>
                <span>Gorilla approved</span>
              </div>
            )
            : null }
        </Recommend>
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

ReviewTile.propTypes = {
  tile: PropTypes.shape({
    review_id: PropTypes.number,
    rating: PropTypes.number,
    reviewer_name: PropTypes.string,
    date: PropTypes.string,
    helpfulness: PropTypes.number,
    summary: PropTypes.string,
    body: PropTypes.string,
    recommend: PropTypes.bool,
    response: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
  }),
};
ReviewTile.defaultProps = {
  tile: 'No Reviews',
};
