import React, { useContext } from 'react';
import styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { ReviewBreakdownContext } from '../Context/ReviewBreakdownContext.jsx';

const Container = styled.div`
  padding:
`;

const Number = styled.span`
  grid-area: span;
  font-size: 20px;
`;

const Characteristic = styled.div`
  font-size: 20px;
`;

const Key = styled.header`
  grid-area: header;
  font-size: 20px;
`;

const Banana = styled.span`
  grid-area: span;
`;

const Recommendation = () => {
  const [breakdown] = useContext(ReviewBreakdownContext);

  return (
    <div>
      <Characteristic>
        {Object.entries(breakdown.characteristics).map((entries) => {
          const [key, value] = entries;
          console.log(value);
          return (
            <div>
              <input type="range" list="tickmarks" />
              <datalist id="tickmarks">
                <option value="1" label="too low">1</option>
                <option value="2">2</option>
                <option value="3" label="perfect">3</option>
                <option value="4">4</option>
                <option value="5" label="too good">5</option>
              </datalist>
            </div>
          );
        })}
      </Characteristic>
    </div>
  );
};

export default Recommendation;

// breakdown.characteristics.Quality.value

            // <Container>
            //   {key}
            //   <label>
            //     <Input
            //       type="range"
            //       min={1}
            //       value={parseFloat(value.value)}
            //       max={5}
            //       className="slider"
            //     />