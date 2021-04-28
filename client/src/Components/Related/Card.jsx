/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsFillStarFill } from 'react-icons/bs';
import { GiBananaPeeled } from 'react-icons/gi';
import { ModalContext } from '../../contexts/ModalContext.jsx';
import { CardContext } from '../../contexts/CardContext.jsx';
import { MainContext } from '../../contexts/MainContextProvider.jsx';
import { StyleContext } from '../Overview/StyleContext.jsx';
import image from '../../../dist/noImg.png';

// Styled Components
const CardContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 250px;
  height: 400px;
  border: 1px solid black;
  padding: 10px 12px 10px;
  background: alicewhite;
  overflow: hidden;
  box-sizing: border-box;
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

const Original = styled.div`
  color: black;
  font-weight: 300;
  text-decoration: none;
`;

const Price = styled(Original)`
  text-decoration: line-through;
`;

const Sale = styled.div`
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

const Rating = styled.div`
  position: relative;
  bottom: 0;
  text-align: right;
`;

// Card Component
const Card = ({ card }) => {
  const { toggleCharModal, makeCharModal } = useContext(ModalContext);
  const { changeProduct } = useContext(MainContext);
  const { setCurrentStyle } = useContext(StyleContext);
  const { resetCards } = useContext(CardContext);

  return (
    <CardContainer>
      <StarIcon onClick={() => { makeCharModal(card.prodId); toggleCharModal(); }}>
        <BsFillStarFill />
      </StarIcon>
      <ProductImage src={card.imageUrl ? card.imageUrl : image} alt="" onClick={() => { resetCards(); changeProduct({ currProd: card.prodId, currStyle: card.id }); setCurrentStyle(card.id); }} />
      <ProductCategory>
        <div>{card.prodCategory}</div>
        <div>{card.prodName}</div>
      </ProductCategory>
      {card.sale !== null ? (
        <>
          <Price>{card.price}</Price>
          <Sale>{card.sale}</Sale>
        </>
      ) : <Original>{card.price}</Original>}
      {card.ratingAvg > 0 ? (
        <Rating>
          {[...Array(5)].map((star, index) => <GiBananaPeeled size={25} color={index <= card.ratingAvg ? '#BEDF7C' : '#808080'} value={index} key={index} />)}
        </Rating>
      ) : null}
    </CardContainer>
  );
};

export default Card;
