/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ImRadioUnchecked, ImRadioChecked2 } from 'react-icons/Im';
import styled from 'styled-components';
import { WriteReviewContext } from '../../Context/WriteNewReviewContext.jsx';

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
    <div>
      {Object.entries(chara).map((entry) => {
        const [key, value] = entry;
        return value.id !== null
          ? (
            <div>
              <p>{key}</p>
              <p>{value.placeholder}</p>
              {value.options.slice(0).map((choice, i) => {
                const index = i + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      title={key}
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
    </div>
  );
};

export default Characteristics;
