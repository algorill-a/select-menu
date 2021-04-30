/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { OutfitContext } from '../../contexts/OutfitContext.jsx';

// Styled Components
const CardContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 300px;
  height: 400px;
  border: 2px solid black;
  padding: 10px 12px 10px;
  background: alicewhite;
  overflow: hidden;
  box-sizing: border-box;
  margin: 5px;
  box-shadow: 2px 5px 5px #808080;
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

const Sale = styled.div`
  color: red;
  font-weight: 300;
`;

const CloseIcon = styled.div`
  color: grey;
  padding: 5px;
  text-align: right;
  opacity: 30%;
  :hover {
    opacity: 85%;
  }
`;

const Outfit = ({ outfit }) => {
  const { dispatch } = useContext(OutfitContext);
  //
  return (
    <CardContainer>
      <CloseIcon onClick={() => dispatch({ type: 'REMOVE_OUTFIT', value: outfit.prodStyleId })}><AiOutlineClose /></CloseIcon>
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
    </CardContainer>
  );
};

export default Outfit;
