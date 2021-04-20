/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Input = styled.input`
  display: none;
  size: 20;
`;

const OverallRating = () => {
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

  return (
    <form>
      <div><Title>Overall Rating</Title></div>
      <p>{text}</p>
      {starRating().map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                setText(star.rating);
              }}
            />
            <FaStar
              size={25}
              color={(rating || hover) < ratingValue ? '#e4e5e9' : '#ffc107'}
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
    </form>
  );
};

export default OverallRating;
