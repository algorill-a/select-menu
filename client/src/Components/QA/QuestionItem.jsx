import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from './UserContext.jsx';
import Helpful from './Helpful.jsx';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

const QuestionItem = ({ question }) => {
  const { state } = useContext(Context);

  return (
    <div>
      <StyledDiv>
        <p> </p>
        <Q>Q:</Q>
        <span> </span>
        {question}
      </StyledDiv>
      <span> </span>
      <HelpfulDiv>
        <Helpful />
        <Answer>
          <AddAnswer />
        </Answer>
      </HelpfulDiv>
      <AnswerList />

    </div>

  );
};

export default QuestionItem;

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: inline-flex;
flex-direction: row;
font-weight: bold;
`;

const Answer = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: row;
font-weight: 100;
font-size: 10px;
float: right;
`;

const HelpfulDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: 100;
font-size: 10px;
float: right;
display: flex;
padding-right: 20%;
`;

const Q = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
padding-right: 10px;
float: left;
`;
