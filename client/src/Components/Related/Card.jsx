import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsFillStarFill } from 'react-icons/bs';
// import ComparisonModal from './ComparisonModal.jsx';
// import ModalContextProvider from '../../contexts/ModalContext.jsx';
// import { ModalContext } from '../../contexts/ModalContext.jsx';
import { CardContext } from '../../contexts/CardContext.jsx';

// Styled Components
const CardContainer = styled.div`
  width: 300px;
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

const toggle = () => {
  console.log('CLICKED');
};

// Card Component
const Card = ({ card }, { display }) => {
 // const { toggle } = useContext(ModalContext);
  const { removeCard } = useContext(CardContext);

  return (
    <div>
      <CardContainer>
        <StarIcon onClick={toggle}><BsFillStarFill /></StarIcon>
        <ProductImage src={card.imageUrl} alt="" />
        <ProductCategory>
          <div>{card.prodCategory}</div>
          <div>{card.prodName}</div>
        </ProductCategory>
        <Price>{card.price}</Price>
      </CardContainer>
    </div>
  );
};

export default Card;


/**
 *       <ModalContextProvider>
        <ComparisonModal />
      </ModalContextProvider>
 */