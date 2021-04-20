import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsFillStarFill } from 'react-icons/bs';
import ComparisonModal from './ComparisonModal.jsx';
import { ModalContext } from '../../contexts/ModalContext.jsx';
import { CardContext } from '../../contexts/CardContext.jsx';

// Styled Components
const CardContainer = styled.div`
  width: 250px;
  height: 400px;
  border: 1px solid black;
  padding: 10px 12px 10px;
  background: alicewhite;
  overflow: hidden;
  box-sizing: border-box;
  :hover {
    opacity: 0.8;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  top: 0;
  object-fit: cover;
  border: 1px solid alicewhite;
`;

const ProductCategory = styled.h3`
  color: black;
  font-weight: 300;
`;

const Price = styled.div`
  color: red;
  font-weight: 300;
`;

const StarIcon = styled.div`
  color: grey;
  padding: 5px;
  text-align: right;
  opacity: 30%;
  :hover {
    opacity: 85%;
  }
`;

// Card Component
const Card = ({ card }) => {
  const { toggleModal } = useContext(ModalContext);
  const { removeCard } = useContext(CardContext);

  return (
    <CardContainer>
      <ComparisonModal />
      <StarIcon onClick={toggleModal}><BsFillStarFill /></StarIcon>
      <ProductImage src={card.imageUrl} alt="" />
      <ProductCategory>
        <div>{card.prodCategory}</div>
        <div>{card.prodName}</div>
      </ProductCategory>
      <Price>{card.price}</Price>
    </CardContainer>
  );
};

export default Card;
