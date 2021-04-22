import React, { useContext } from 'react';
// import { UserContext } from './UserContext.jsx';
import styled from 'styled-components';
import Context from './UserContext.jsx';

const Search = () => {
  const { state, actions } = useContext(Context);
  const { list, search } = state;

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   for (let i = 0; i < list.length; i + 1) {
  //     if (search === list[i].question) {
  //       actions({ type: 'setState', payload: { ...state, list: [list[i].question] } });
  //     }
  //   }
  // };

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
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 79.5%;
height: 50px;
font-weight: bold;
padding-left: 10px;
`;

// const message = useContext(UserContext);
// {message}
