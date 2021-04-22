import React, { useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalContext } from '../../contexts/ModalContext.jsx';

// styled components
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
`;

const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 60%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 101;
  padding: 40px;
`;

const CloseIcon = styled.div`
  text-align: right;
`;

const ComparisonModal = () => {
  const { display } = useContext(ModalContext);
  const { toggleModal } = useContext(ModalContext);

  return display ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleModal}><AiOutlineClose /></CloseIcon>
        <h1>Modal Header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia cupiditate excepturi odit quos officiis temporibus alias culpa, quas
          deleniti eligendi vitae pariatur neque modi magni earum in dolorem consequatur
          exercitationem.
          Voluptatum, animi ipsa harum repellat explicabo id, accusamus soluta sequi non labore
          numquam deserunt optio odio? Nihil voluptates dicta sapiente culpa quas quaerat, nemo
          libero dolores dignissimos amet itaque numquam.
          Nostrum repudiandae illum autem fuga delectus officiis, nemo nisi provident quas,
          error, vitae possimus modi quibusdam eius tenetur sint tempora cum fugit facilis neque
          rerum officia adipisci nesciunt recusandae! Sapiente.
        </p>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default ComparisonModal;
