import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Context from './UserContext.jsx';

function AddQuestion() {
  const { state, actions } = useContext(Context);
  const [questionIsOpen, setQuestionIsOpen] = useState(false);

  return (
    <div>
      <StyledButton type="submit" onClick={() => setQuestionIsOpen(true)}>ADD A QUESTION +</StyledButton>
      <Modal
        isOpen={questionIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setQuestionIsOpen(false)}
      >

        <StyledH2>Ask your Question about [Product Name Here]</StyledH2>
        <FormDiv
          onSubmit={(event) => {
            event.preventDefault();
            event.target.reset();
            const newQuestion = { question: state.value };
            const { list } = state;
            list.push(newQuestion);
            actions({
              type: 'setState',
              payload: {
                ...state, list, value: '', name: '', email: '',
              },
            });

            setQuestionIsOpen(false);
          }}
          type="submit"
          value="Submit"
        >
          <label htmlFor="input">
            <StyledDiv>Your Question:</StyledDiv>
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

          <StyledButton type="submit"> SUBMIT</StyledButton>
        </FormDiv>
      </Modal>
    </div>
  );
}

export default AddQuestion;

const StyledInput = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 800px;
height: 40px;
`;

const StyledButton = styled.button`
&:hover ${StyledButton} {
  background-color: #383838;
}
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 200px;
height: 50px;
background: #C50000;
color: white;
border: none;
border-width: thin;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 2px;
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
