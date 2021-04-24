/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GiBananaPeeled } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { OutfitContext } from '../../contexts/OutfitContext.jsx';

// Styled Components
const CardContainer = styled.div`
  font-family: Helvetica;
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

const Outfit = ({ outfit }) => {
  const { removeOutfit } = useContext(OutfitContext);
  //
  return (
    <CardContainer>
      <StarIcon onClick={() => removeOutfit(outfit.prodStyleId)}><AiOutlineClose /></StarIcon>
      <ProductImage src={outfit.imageUrl} alt="" />
      <ProductCategory>
        <div>{outfit.prodCategory}</div>
        <div>{outfit.prodName}</div>
      </ProductCategory>
      {outfit.sale !== null ? (
        <>
          <Price>{outfit.price}</Price>
          <Sale>{outfit.sale}</Sale>
        </>
      ) : <Original>{outfit.price}</Original>}
      {outfit.ratingAvg > 0 ? (
        <Rating>
          {[...Array(5)].map((star, index) => <GiBananaPeeled size={25} color={index <= outfit.ratingAvg ? '#BEDF7C' : '#808080'} value={index} />)}
        </Rating>
      ) : null}
    </CardContainer>
  );
};

export default Outfit;
