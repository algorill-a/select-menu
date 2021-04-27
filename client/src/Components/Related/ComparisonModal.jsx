/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
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
  height: 50%;
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

export const Grid = styled.div`
  border: 1px solid black;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  text-align: center;
`;

const THead = styled.div`
  border: 1px solid black;
  text-align: center;
  font-weight: bold;
`;

const ComparisonModal = () => {
  const { display } = useContext(ModalContext);
  const {
    toggleModal,
    characteristics,
    prod1,
    prod2,
  } = useContext(ModalContext);

  return display ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleModal}><AiOutlineClose /></CloseIcon>
        <Grid>
          <THead>
            <Row>
              <Col size={1}>
                {prod1.name}
              </Col>
              <Col size={1}>
                Characteristics
              </Col>
              <Col size={1}>
                {prod2.name}
              </Col>
            </Row>
          </THead>
          <Row>
            <Col size={1}>
              {characteristics.map((item, index) => ((prod1.feat.includes(item))
                ? <Row><AiFillCheckCircle color="#32CD32" key={index} /></Row> : <Row><AiFillCheckCircle color="#fff" key={index} /></Row>
              ))}
            </Col>
            <Col size={1}>
              {characteristics.map((char, index) => (
                <Row key={index}>{char}</Row>
              ))}
            </Col>
            <Col size={1}>
              {characteristics.map((item, index) => ((prod2.feat.includes(item))
                ? <Row><AiFillCheckCircle color="#32CD32" key={index} /></Row> : <Row><AiFillCheckCircle color="#fff" key={index} /></Row>
              ))}
            </Col>
          </Row>
        </Grid>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default ComparisonModal;
