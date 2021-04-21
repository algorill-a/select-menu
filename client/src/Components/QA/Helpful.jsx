import React, { useState } from 'react';
import styled from 'styled-components';
import AddAnswer from './AddAnswer.jsx';

function Helpful() {
// Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      Helpful?
      <span> </span>
      <StyledSpan data-testid="button" onClick={() => setCount(count + 1)}>
        Yes
      </StyledSpan>
      <span> </span>
      <span>
        (
        <span data-testid="display">{count}</span>
        )
        {' '}
        |&nbsp;
        <span> </span>
      </span>

    </div>
  );
}

export default Helpful;

const StyledSpan = styled.span`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: inline-block;
cursor: pointer;
justify-content: right;
font-weight: 100;
font-size: 10px;
&:hover ${StyledSpan} {
  text-decoration: underline;
}
`;
