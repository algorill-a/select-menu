/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import gorilla from '../../images/gorilla.gif';
import Card from './Card.jsx';
import { CardContext } from '../../contexts/CardContext.jsx';
import { MainContext } from '../../contexts/MainContextProvider.jsx';

// Styled Components
const CardListContainer = styled.div`
  border: 1px solid black,
  padding: 10px;
  height: 700px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLeft = styled.button`
  position: absolute;
  height: 50px;
  top: 50%;
  left: 0px;
  opacity: 30%;

  :hover {
    opacity: 80%;
  }
`;

const IconRight = styled.button`
  position: absolute;
  height: 50px;
  top: 50%;
  right: 0px;
  opacity: 30%;

  :hover {
    opacity: 80%;
  }
`;

// Card List Component
const CardList = () => {
  const { currProduct } = useContext(MainContext);
  const { cards } = useContext(CardContext);
  const { addCard } = useContext(CardContext);
  let productId;
  let ratings = 0;

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const getProducts = (endpoint) => fetch(`api/${endpoint}`)
    .then((res) => res.json());

  useEffect(() => {
    getProducts(`products/${currProduct}/related`)
      .then((data2) => data2.forEach((item) => {
        getProducts(`products/${item}`)
          .then((data) => { productId = data.category; });
        getProducts(`reviews/meta/?product_id=${item}`)
          .then((reviews) => {
            const keys = Object.keys(reviews.ratings);
            if (keys.length > 0) {
              for (let i = 0; i < keys.length; i++) {
                ratings += (parseInt(keys[i], 10) * parseInt(reviews.ratings[[keys[i]]], 10));
              }
              ratings /= 5;
            }
          });
        getProducts(`products/${item}/styles`)
          .then((data3) => data3.results.forEach((style) => {
            addCard({
              id: style.style_id,
              prodId: item,
              prodCategory: productId,
              prodName: style.name,
              imageUrl: style.photos[0].thumbnail_url,
              price: style.original_price,
              sale: style.sale_price,
              ratingAvg: ratings,
            });
          }));
      }));
  }, []);

  const prevCard = () => {
    const reset = currentCardIndex === 0;
    const index = reset ? cards.length - 1 : currentCardIndex - 1;
    setCurrentCardIndex(index);
  };

  const nextCard = () => {
    const resetIndex = currentCardIndex === cards.length - 1;
    const index = resetIndex ? 0 : currentCardIndex + 1;
    setCurrentCardIndex(index);
  };

  const activeCards = cards.slice(currentCardIndex, currentCardIndex + 4);
  const cardsToDisplay = activeCards.length < 4
    ? [...activeCards, ...cards.slice(0, 4 - activeCards.length)] : activeCards;

  return cards.length ? (
    <div>
      <CardListContainer>
        <IconLeft onClick={prevCard}><IoIosArrowBack /></IconLeft>
        {cardsToDisplay.map((card) => (<Card card={card} key={card.id} value={card.prodId} />))}
        <IconRight onClick={nextCard}><IoIosArrowForward /></IconRight>
      </CardListContainer>
    </div>

  ) : (
    <div>
      <h1>HELLO THERE!</h1>
      <img src={gorilla} alt="" />
    </div>
  );
};

export default CardList;