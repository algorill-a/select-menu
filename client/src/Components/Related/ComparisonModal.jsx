/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
import { ModalContext } from '../../contexts/ModalContext.jsx';
import { MainContext } from '../../contexts/MainContextProvider.jsx';

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

const ComparisonModal = (props) => {
  const { currProduct } = useContext(MainContext);
  const { display } = useContext(ModalContext);
  const { toggleModal } = useContext(ModalContext);
  const [characteristics, setCharacteristics] = useState([]);
  const [prod1, setProd1Char] = useState({ name: '', feat: [] });
  const [prod2, setProd2Char] = useState({ name: '', feat: [] });
  let allFeat = [];

  const getProducts = (endpoint) => fetch(`api/${endpoint}`)
    .then((res) => res.json());

  useEffect(() => {
    const featList1 = [];
    const featList2 = [];

    getProducts(`products/${currProduct.currProd}`)
      .then((data1) => {
        data1.features.forEach((feat) => {
          featList1.push(`${feat.value} ${feat.feature}`);
          allFeat.push(`${feat.value} ${feat.feature}`);
        });
        setProd1Char({
          name: data1.name,
          feat: featList1,
        });
      });
    getProducts(`products/${props.value}`)
      .then((data2) => {
        data2.features.forEach((feat) => {
          featList2.push(`${feat.value} ${feat.feature}`);
          allFeat.push(`${feat.value} ${feat.feature}`);
        });
        setProd2Char({
          name: data2.name,
          feat: featList2,
        });
      });

    allFeat = [...new Set(allFeat)];
    setCharacteristics(allFeat);
  }, []);

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
              {characteristics.map((item) => ((prod1.feat.includes(item))
                ? <Row><AiFillCheckCircle color="#32CD32" /></Row> : <Row><AiFillCheckCircle color="#fff" /></Row>
              ))}
            </Col>
            <Col size={1}>
              {characteristics.map((char) => (
                <Row>{char}</Row>
              ))}
            </Col>
            <Col size={1}>
              {characteristics.map((item) => ((prod2.feat.includes(item))
                ? <Row><AiFillCheckCircle color="#32CD32" /></Row> : <Row><AiFillCheckCircle color="#fff" /></Row>
              ))}
            </Col>
          </Row>
        </Grid>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default ComparisonModal;
