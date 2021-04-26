/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
import { ImRadioUnchecked, ImRadioChecked2 } from 'react-icons/Im';
import styled from 'styled-components';
import { WriteReviewContext } from '../WriteNewReviewContext.jsx';

const Characteristics = () => {
  const [review, setReview] = useContext(WriteReviewContext);
  const [clicked, setClicked] = useState(null);
  const charas = [
    {
      name: 'Size',
      options: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
      placeholder: 'Please Select',
      levels: ['Too small', 'Too big', 'Perfect'],
    },
    {
      name: 'Width',
      options: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      placeholder: 'Please Select',
      levels: ['Too small', 'Too big', 'Perfect'],
    },
    {
      name: 'Comfort',
      options: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      placeholder: 'Please Select',
      levels: ['Uncomfortable', 'Comfortable'],
    },
    {
      name: 'Quality',
      options: ['Poor', 'Below average', 'What I expected', 'Pretty Great', 'Perfect'],
      placeholder: 'Please Select',
      levels: ['Poor', 'Perfect'],
    },
    {
      name: 'Length',
      options: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      placeholder: 'Please Select',
    },
    {
      name: 'Fit',
      options: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
      placeholder: 'Please Select',
    },
  ];
  const [text, setText] = useState({
    Size: {
      placeholder: 'Please Select',
      value: null,
    },
    Width: {
      placeholder: 'Please Select',
      value: null,
    },
    Comfort: {
      placeholder: 'Please Select',
      value: null,
    },
    Quality: {
      placeholder: 'Please Select',
      value: null,
    },
    Length: {
      placeholder: 'Please Select',
      value: null,
    },
    Fit: {
      placeholder: 'Please Select',
      value: null,
    },
  });

  const selectOptions = (key, option, id) => {
    setText((oldText) => ({
      ...oldText,
      [key]: {
        ...oldText[key],
        placeholder: option,
        value: id,
      },
    }));
    setReview((oldReview) => ({
      ...oldReview,
      characteristics: {
        ...oldReview.characteristics,
        [key]: {
          value: id,
        },
      },
    }));
  };

  return (
    <div>
      {charas.map((chara) => (
        <div>
          <p>{chara.name}</p>
          <p>{text[chara.name].placeholder}</p>
          {chara.options.map((choice, i) => {
            const index = i + 1;
            return (
              <label>
                {' '}
                <input
                  type="radio"
                  name="choice"
                  key={index}
                  value={choice}
                  onClick={() => selectOptions(chara.name, choice, index)}
                />
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Characteristics;
