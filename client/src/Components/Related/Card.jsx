/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
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
  width: 300px;
  height: 400px;
  border: 2px solid black;
  border-radius: 0.12em;
  padding: 10px 12px 10px;
  background: alicewhite;
  overflow: hidden;
  box-sizing: border-box;
  margin: 5px;
  box-shadow: 2px 5px 5px #808080;
  &:hover {
    border: 2px solid #00bee8;
    box-shadow: 2px 5px 5px #00bee8;
  }
`;

const ProdDescription = styled.div`
  display: grid;
  grid-template-columns: 50vw;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
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

const Sale = styled.span`
  color: red;
  font-weight: 300;
`;

const StarIcon = styled.div`
  position: absolute;
  color: grey;
  padding: 5px;
  opacity: 30%;
  :hover {
    opacity: 95%;
  }
`;

const FullStars = styled.span`
  position: relative;
  opacity: 50%;
  margin-top: 5px;
`;

const Rating = styled.div`
  position: absolute;
  bottom: 25px;
`;

const Star = styled.span`
  position: absolute;
  bottom: 0;
  clip: ${(props) => (props.percent > 0 && props.percent <= 25 ? 'rect(0px, 7px, 25px, 0px)'
    : props.percent > 25 && props.percent <= 50 ? 'rect(0px, 13px, 25px, 0px)'
      : props.percent > 50 && props.percent <= 75 ? 'rect(0px, 17px, 25px, 0px)'
        : 'rect(0px, 25px, 25px, 0px)')}
`;

// Card Component
const Card = ({ card }) => {
  const { toggleCharModal, makeCharModal } = useContext(ModalContext);
  const { changeProduct } = useContext(MainContext);
  const { setCurrentStyle } = useContext(StyleContext);
  const { resetCards } = useContext(CardContext);

  // average rating
  const fullStarCount = Math.floor(card.ratingAvg);
  const percentStar = ((card.ratingAvg - Math.floor(card.ratingAvg)) * 100).toFixed(0);

  return (
    <CardContainer>
      <StarIcon onClick={() => { makeCharModal(card.prodId); toggleCharModal(); }}>
        <BsFillStarFill />
      </StarIcon>
      <ProductImage src={card.imageUrl ? card.imageUrl : image} alt="" onClick={() => { resetCards(); changeProduct({ currProd: card.prodId, currStyle: card.id }); setCurrentStyle(card.id); }} />
      <ProdDescription>
        <ProductCategory>
          <div>{card.prodCategory}</div>
          <div>{card.prodName}</div>
        </ProductCategory>
        {card.sale !== null ? (
          <div>
            <Price>{card.price}</Price>
            <Sale>{card.sale}</Sale>
          </div>
        ) : <Original>{card.price}</Original>}
        {card.ratingAvg > 0 ? (
          <>
            <FullStars>{[...Array(5)].map(() => <GiBananaPeeled size={25} color="#3d3d3d" key={uuidv4()} />)}</FullStars>
            <Rating>
              {fullStarCount > 0 ? ([...Array(fullStarCount)].map(() => <GiBananaPeeled size={25} color="#20afe3" key={uuidv4()} />)) : null}
              {percentStar > 0 ? (<Star star={fullStarCount} percent={percentStar}><GiBananaPeeled size={25} color="#20afe3" /></Star>) : null}
            </Rating>
          </>
        ) : null}
      </ProdDescription>
    </CardContainer>
  );
};

export default Card;
