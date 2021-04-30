/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WriteReviewContext } from '../../Context/WriteNewReviewContext.jsx';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

const Characteristics = () => {
  const { reviewData, charaData } = useContext(WriteReviewContext);
  const [review, setReview] = reviewData;
  const [chara, setChara] = charaData;

  const selectOptions = (event) => {
    const {
      title, name, id, value,
    } = event.target;

    setReview((oldReview) => ({
      ...oldReview,
      characteristics: {
        ...oldReview.characteristics,
        [name]: parseInt(id, 10),
      },
    }));
    setChara((oldChara) => ({
      ...oldChara,
      [title]: {
        ...oldChara[title],
        placeholder: value,
      },
    }));
  };

  return (
    <Container>
      {Object.entries(chara).map((entry, i) => {
        const [title, value] = entry;
        return value.id !== null
          ? (
            <div key={Math.floor(Math.random() * 10000)}>
              <p>{title}</p>
              <p>{value.placeholder}</p>
              {value.options.slice(0).map((choice, j) => {
                const index = j + 1;
                return (
                  <label key={Math.floor(Math.random() * 10000)}>
                    <input
                      type="radio"
                      title={title}
                      name={value.id}
                      id={index}
                      value={choice}
                      onClick={selectOptions}
                    />
                  </label>
                );
              })}
            </div>
          )
          : null;
      })}
    </Container>
  );
};

export default Characteristics;
