/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { WriteReviewContext } from '../../Context/WriteNewReviewContext.jsx';

const Input = styled.input`
  display: none;
  size: 20;
`;

const OverallRating = () => {
  const { reviewData } = useContext(WriteReviewContext);
  const [review, setReview] = reviewData;
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [text, setText] = useState('Please select');

  const starRating = () => ([
    { rating: 'Disapointing' },
    { rating: 'Could be better' },
    { rating: 'It\'s Okay' },
    { rating: 'Pretty Great' },
    { rating: 'Love it!' },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: parseInt(value, 10) });
  };

  return (
    <div>
      <div>Overall Rating</div>
      <p>{text}</p>
      {starRating().map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onChange={handleChange}
              key={Math.floor(Math.random() * 10000)}
              onClick={() => {
                setRating(ratingValue);
                setText(star.rating);
              }}
            />
            <BsStarFill
              size={25}
              color={(rating || hover) < ratingValue ? '#3d3d3d' : '#20afe3'}
              onMouseEnter={() => {
                setHover(ratingValue);
                setText(star.rating);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default OverallRating;
