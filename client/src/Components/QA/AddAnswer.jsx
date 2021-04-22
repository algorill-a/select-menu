import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Context from './UserContext.jsx';

function AddAnswer() {
  const { state, actions } = useContext(Context);
  const [answerIsOpen, setAnswerIsOpen] = useState(false);

  return (
    <div>
      <StyledButton type="submit" onClick={() => setAnswerIsOpen(true)}>Add an answer</StyledButton>
      <Modal
        isOpen={answerIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setAnswerIsOpen(false)}
      >

        <StyledH2>Add your Answer about [Product Name Here]</StyledH2>
        <FormDiv
          onSubmit={(event) => {
            event.preventDefault();
            event.target.reset();
            const newAnswer = {
              answer: state.value,
              name: state.name,
              email: state.value,
            };
            const { answers } = state;
            answers.push(newAnswer);
            actions({
              type: 'setState',
              payload: {
                ...state, answers, value: '', name: '', email: '',
              },
            });

            setAnswerIsOpen(false);
          }}
          type="submit"
          value="Submit"
        >
          <label htmlFor="input">
            <StyledDiv>Your Answer:</StyledDiv>
            <span> </span>
            <StyledInput
              className="textbox"
              type="text"
              placeholder="Why did you like the product or not?"
              value={state.value}
              onChange={(event) => actions({ type: 'setState', payload: { ...state, value: event.target.value } })}
            />
          </label>
          <p> </p>
          <label htmlFor="input">
            <StyledDiv>What is your nickname?:</StyledDiv>
            <span> </span>
            <StyledInput
              className="textbox"
              type="text"
              placeholder="Example: john doe"
              value={state.name}
              onChange={(event) => actions({ type: 'setState', payload: { ...state, name: event.target.value } })}
            />
          </label>
          <p> </p>
          <label htmlFor="input">
            <StyledDiv>Your email:</StyledDiv>
            <span> </span>
            <StyledInput
              className="textbox"
              type="text"
              placeholder="Example: john123@gmail.com"
              value={state.email}
              onChange={(event) => actions({ type: 'setState', payload: { ...state, email: event.target.value } })}
            />
          </label>
          <p> </p>

          <StyledSubmit type="submit"> SUBMIT</StyledSubmit>
        </FormDiv>
      </Modal>
    </div>
  );
}

export default AddAnswer;

const StyledInput = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 800px;
height: 40px;
`;

const StyledButton = styled.span`
&:hover ${StyledButton} {
  text-decoration: underline;
}
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
background: white;
border: none;
font-size: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const StyledSubmit = styled.button`

font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 200px;
height: 50px;
color: white;
background: #C50000;
border: none
border-width: thin;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 2px;
cursor: pointer;
&:hover ${StyledSubmit} {
  background-color: #383838;
}
`;

const StyledH2 = styled.h2`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10%;
`;

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
`;

const FormDiv = styled.form`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

// onSubmit={(event) => {
//   event.preventDefault();
//   event.target.reset();
//   const newAnswer = {
//     answer: state.value,
//     name: state.name,
//     email: state.value,
//   };
//   const { answers } = state;
//   answers.push(newAnswer);
//   actions({
//     type: 'setState',
//     payload: {
//       ...state, answers, value: '', name: '', email: '',
//     },
//   });

//   setAnswerIsOpen(false);
// }}