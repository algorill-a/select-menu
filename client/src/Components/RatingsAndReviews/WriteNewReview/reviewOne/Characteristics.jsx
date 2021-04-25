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
  const characteristics = [
    {
      name: 'SIZE',
      options: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
      levels: ['Too small', 'Too big', 'Perfect'],
    },
    {
      name: 'WIDTH',
      options: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      levels: ['Too small', 'Too big', 'Perfect'],
    },
    {
      name: 'COMFORT',
      options: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      levels: ['Uncomfortable', 'Comfortable'],
    },
    {
      name: 'QUALITY',
      options: ['Poor', 'Below average', 'What I expected', 'Pretty Great', 'Perfect'],
      levels: ['Poor', 'Perfect'],
    },
  ];
  const [text, setText] = useState({
    SIZE: 'Please Select',
    WIDTH: 'Please Select',
    COMFORT: 'Please Select',
    QUALITY: 'Please Select',
  });

  const selectOptions = (key, option) => {
    setText({ ...text, [key]: option });
    setReview({ ...review, characteristics: text });
  };

  return (
    <div>
      {characteristics.map((characteristic, index) => (
        <form>
          <p>{characteristic.name}</p>
          <p>{text[characteristic.name]}</p>
          {characteristic.options.map((choice, i) => (
            <label>
              {' '}
              <input
                type="radio"
                name="choice"
                value={choice}
                onClick={() => selectOptions(characteristic.name, choice)}
              />
            </label>
          ))}
        </form>
      ))}
    </div>
  );
};

export default Characteristics;
