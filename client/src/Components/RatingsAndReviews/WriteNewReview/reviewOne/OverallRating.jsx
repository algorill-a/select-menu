import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { v4 as uuidv4 } from 'uuid';
import { WriteReviewContext } from '../../Context/WriteNewReviewContext';

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
          <label key={uuidv4()} htmlFor={i}>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onChange={handleChange}
              onClick={() => {
                setRating(ratingValue);
                setText(star.rating);
              }}
            />
            <GiBananaPeeled
              size={40}
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
