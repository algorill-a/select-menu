import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Context from './UserContext.jsx';

function MoreAqs() {
  const { state, actions } = useContext(Context);
  const [ moreAqsIsOpen, setMoreAqsIsOpenOpen] = useState(false);

  return (
    <div>
      <StyledButton type="submit" onClick={() => setMoreAqsIsOpenOpen(true)}>MORE ANSWERED QUESTIONS</StyledButton>
    </div>
  );
}

export default MoreAqs;

const StyledButton = styled.button`
&:hover ${StyledButton} {
  background-color: #EEEEEE;
}
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 260px;
height: 50px;
background: white;
border: solid, 1px;
border-width: thin;
display: flex;
flex-direction: row;
cursor: pointer;
border-radius: 2px;
margin-right: 15px;
flex-direction: row;
align-items: center;
justify-content: center;
`;