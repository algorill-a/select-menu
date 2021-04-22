import React, { useContext } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Context from './UserContext.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';

const QuestionItem = ({ answer, name }) => {
  const { state } = useContext(Context);
  return (
    <div>
      <A>A:</A>
      <span> </span>
      <StyledDiv>
        {answer}
      </StyledDiv>
      <span> </span>
      <By>
        <span>by</span>
        &nbsp;
        <span>{name},</span>
        &nbsp;
        <span>{moment().format('LL')}&nbsp;&nbsp;&nbsp;| </span>
        &nbsp;
        &nbsp;
        <Helpful />
        <Report />
      </By>
      <p> </p>
    </div>

  );
};

export default QuestionItem;

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: inline-block;
flex-direction: row;
font-size: 14px;
font-weight: lighter;
`;

const HelpfulDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: grid;
justify-content: left;

font-size: 12px;

`;

const A = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
padding-right: 14px;
display: inline-block;
font-weight: bold;
`;

const By = styled.span`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: row;

font-size: 12px;
padding-top: 10px;
`;

const Date = styled.span`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: row;

font-size: 12px;
padding-top: 10px;
`;
