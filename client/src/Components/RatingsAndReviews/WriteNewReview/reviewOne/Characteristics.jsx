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
  const [text, setText] = useState('Please Select');

  // const Input = styled.input`
  // display: none;
  // padding: .25em 1em;
  // size: 20;
  // `;

  const characteristics = () => ([
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
  ]);
  return (
    <div>
      {characteristics().map((characteristic) => (
        <form>
          <p>{characteristic.name}</p>
          <p>{text}</p>
          {characteristic.options.map((choice, i) => (
            <label>
              {/* <ImRadioUnchecked /> */}
              {' '}
              <input
                type="radio"
                name="choice"
                onClick={() => setText(choice)}
              />
            </label>
          ))}
          <p>{characteristic.levels[0]}</p>
          <p>{characteristic.levels[1]}</p>
          <p>{characteristic.levels[2]}</p>
        </form>
      ))}
    </div>
  );
};

export default Characteristics;

// return (
//     <div>
//       {characteristics().map((characteristic) => (
//         <form>
//           <p>{characteristic.name}</p>
//           <p>{text}</p>
//           {characteristic.options.map((choice, i) => (
//             <label>
//               {/* <ImRadioUnchecked /> */}
//               {' '}
//               <input
//                 type="radio"
//                 name="choice"
//                 onClick={() => setText(choice)}
//               />
//             </label>
//           ))}
//           <p>{characteristic.levels[0]}</p>
//           <p>{characteristic.levels[1]}</p>
//           <p>{characteristic.levels[2]}</p>
//         </form>
//       ))}
//     </div>
//   );
