import React, { createContext, useState } from 'react';
// import styled from 'styled-components';

export const ModalContext = createContext();

// Modal Context

const ModalContextProvider = (props) => {
  const [display, setDisplay] = useState(false);

  const toggleModal = () => {
    setDisplay(!display);
  };

  return (
    <ModalContext.Provider value={{ display, toggleModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
