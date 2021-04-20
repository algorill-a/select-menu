import React, { createContext, useState } from 'react';
// import styled from 'styled-components';

export const ModalContext = createContext();

// Modal Context

const ModalContextProvider = (props) => {
  const [display, setDisplay] = useState(false);

  // const [toggle, setToggle] = useState(
  //   () => {
  //     setDisplay(!display);
  //   },
  // );
  const toggle = () => {
    console.log('TOGGLED');
  };

  return display ? (
    <ModalContext.Provider value={{ display, toggle }}>
      {props.children}
    </ModalContext.Provider>
  ) : null;
};

export default ModalContextProvider;
