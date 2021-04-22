import React, { useState } from 'react';
// import { UserContext } from './UserContext.jsx';
import styled from 'styled-components';
import Search from './Search.jsx';
import AddQuestion from './AddQuestion.jsx';
import QuestionList from './QuestionList.jsx';
import MoreAqs from './MoreAqs.jsx';
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
        <HelpfulDiv>
        <MoreAqs />
        <AddQuestion />
        </HelpfulDiv>

      </Context.Provider>
    </AppDiv>
  );
}

export default App;

// <UserContext.Provider value="Hello from Context">
// <Search />
// </UserContext.Provider>

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;;
font-weight: thin;
color: white;
width: 80%;
background: black;
padding-left: 10px;
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

const HelpfulDiv = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: 100;
font-size: 10px;
float: right;
display: flex;
padding-right: 20%;
`;