import React, { useContext } from 'react';
// import { UserContext } from './UserContext.jsx';
import styled from 'styled-components';
import Context from './UserContext.jsx';

const Search = () => {
  const { state, actions } = useContext(Context);

  return (
    <div>
      <form>
        <StyledInput
          className="textbox"
          type="text"
          name="name"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={(event) => actions({ type: 'setState', payload: { ...state, search: event.target.value } })}
        />
        <p> </p>
      </form>
    </div>
  );
};

export default Search;

const StyledInput = styled.input`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 80%;
height: 40px;
font-weight: bold;
`;

// const message = useContext(UserContext);
// {message}
