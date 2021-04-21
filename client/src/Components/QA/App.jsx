import React, { useState } from 'react';
// import { UserContext } from './UserContext.jsx';
import styled from 'styled-components';
import Search from './Search.jsx';
import AddQuestion from './AddQuestion.jsx';
import QuestionList from './QuestionList.jsx';

import useGlobalState from './useGlobalState.jsx';
import Context from './UserContext.jsx';

function App() {
  const store = useGlobalState();

  return (
    <AppDiv>
      <StyledDiv>QUESTIONS & ANSWERS</StyledDiv>
      <p> </p>
      <Context.Provider value={store}>
        <Search />
        <QuestionList />
        <p> </p>
        <AddQuestion />
      </Context.Provider>
    </AppDiv>
  );
}

export default App;

// <UserContext.Provider value="Hello from Context">
// <Search />
// </UserContext.Provider>

const StyledDiv = styled.div`
font-family: 'Arial', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;;
font-weight: thin;
`;

const AppDiv = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: left;
justify-content: left;
height: 100vh;
padding-left: 20%;
padding-top: 10%;
font-weight: lighter;
`;