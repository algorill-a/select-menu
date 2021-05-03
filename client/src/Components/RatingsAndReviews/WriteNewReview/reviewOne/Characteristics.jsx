import React, { useContext } from 'react';
import styled from 'styled-components';
import { WriteReviewContext } from '../../Context/WriteNewReviewContext';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

const Characteristics = () => {
  const { reviewData, characteristicData } = useContext(WriteReviewContext);
  const [, setReview] = reviewData;
  const [chara, setChara] = characteristicData;

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
      {Object.entries(chara).map((entry) => {
        const [title, value] = entry;
        if (value.id !== null) {
          return (
            <div>
              <p>{title}</p>
              <p>{value.placeholder}</p>
              {value.options.slice(0).map((choice, j) => {
                const index = j + 1;
                return (
                  <label>
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
          );
        }
        return null;
      })}
    </Container>
  );
};

export default Characteristics;
