/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import Card from './Card.jsx';
import Outfit from './Outfit.jsx';
import { CardContext } from '../../contexts/CardContext.jsx';
import { MainContext } from '../../contexts/MainContextProvider.jsx';
import { OutfitContext } from '../../contexts/OutfitContext.jsx';

const config = require('../../../../config.js');

// Styled Components
const Title = styled.h3`
  font-family: Helvetica,
  letter-spacing: 4px;
  margin-left: 8em;
`;

const CardListContainer = styled.div`
  border: 0;
  position: relative;
  border: 1px solid black,
  padding: 10px;
  height: 400px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLeft = styled.button`
  position: absolute;
  height: 50px;
  left: 1em;
  opacity: 30%;

  :hover {
    opacity: 80%;
  }
`;

const IconRight = styled.button`
  position: absolute;
  height: 50px;
  right: 1em;
  opacity: 30%;

  :hover {
    opacity: 80%;
  }
`;

const Loading = styled.div`
  text-align: center;
`;

const AddOutfitContainer = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 400px;
  padding: 10px 12px 10px;
  background: #ededed;
  overflow: hidden;
  box-sizing: border-box;
  font-family: Helvetica;
  text-align: center;
  color: #808080;
`;

const AddButton = styled.div`
  text-align: center;
  padding: 100px 0 0 0;
  opacity: 30%;
  :hover {
    opacity: 85%
  }
`;

// Card List Component
const CardList = () => {
  const { currProduct } = useContext(MainContext);
  const { cards } = useContext(CardContext);
  const { addCard } = useContext(CardContext);
  const { outfitList } = useContext(OutfitContext);
  const { addToOutfit } = useContext(OutfitContext);
  let productId;
  let ratings = 0;

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(true);

  const getProducts = (endpoint) => fetch(`api/${endpoint}`, {
    headers: { Authorization: config.TOKEN },
  })
    .then((res) => res.json());

  const addToOutfitCard = (() => {
    getProducts(`products/${currProduct.currProd}`)
      .then((data) => { productId = data.category; });
    getProducts(`products/${currProduct.currProd}/styles/`)
      .then((style) => {
        const item = style.results.filter((data) => (
          data.style_id === currProduct.currStyle
        ));
        addToOutfit({
          prodStyleId: currProduct.currStyle,
          prodCategory: productId,
          prodName: item[0].name,
          imageUrl: item[0].photos[0].thumbnail_url,
          price: item[0].original_price,
          sale: item[0].sale_price,
        });
      });
  });

  useEffect(() => {
    getProducts(`products/${currProduct.currProd}/related`)
      .then((data2) => data2.forEach((item) => {
        getProducts(`products/${item}`)
          .then((data) => { productId = data.category; });
        getProducts(`reviews/meta?product_id=${item}`)
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
  }, [currProduct]);

  const prevCard = () => {
    const start = currentCardIndex === 0;
    if (!start) {
      setShowStart(true);
      setShowEnd(true);
      const index = currentCardIndex - 1;
      setCurrentCardIndex(index);
    } else {
      setShowStart(false);
    }
  };

  const nextCard = () => {
    const end = currentCardIndex === cards.length - 1;
    if (!end) {
      setShowStart(true);
      setShowEnd(true);
      const index = currentCardIndex + 1;
      setCurrentCardIndex(index);
    } else {
      setShowEnd(false);
    }
  };

  const activeCards = cards.slice(currentCardIndex, currentCardIndex + 4);
  const cardsToDisplay = activeCards.length < 4
    ? [...activeCards, ...cards.slice(0, 4 - activeCards.length)] : activeCards;

  return cards.length ? (
    <>
      <Title>Related Items</Title>
      <CardListContainer>
        {showStart ? <IconLeft onClick={prevCard}><IoIosArrowBack /></IconLeft> : null}
        {showEnd ? <IconRight onClick={nextCard}><IoIosArrowForward /></IconRight> : null}
        {cardsToDisplay.map((card) => (<Card card={card} key={card.id} value={card.prodId} />))}
      </CardListContainer>

      <Title>Outfit List</Title>
      {outfitList.length ? (
        <>
          <CardListContainer>
            <AddOutfitContainer>
              <AddButton onClick={addToOutfitCard}><IoIosAddCircle size={100} /></AddButton>
              Add to Outfit
            </AddOutfitContainer>
            {outfitList.map((outfit) => (
              <Outfit outfit={outfit} key={outfit.id} value={outfit.prodId} />))}
            {showStart ? <IconLeft onClick={prevCard}><IoIosArrowBack /></IconLeft> : null}
            {showEnd ? (<IconRight onClick={nextCard}><IoIosArrowForward /></IconRight>) : null}
          </CardListContainer>
        </>
      ) : (
        <CardListContainer>
          <AddOutfitContainer onClick={addToOutfitCard}>
            <AddButton><IoIosAddCircle size={100} /></AddButton>
            Add to Outfit
          </AddOutfitContainer>
        </CardListContainer>
      )}
    </>
  ) : (
    <Loading>
      <h1>HELLO THERE!</h1>
      <img src="./gorilla2.gif" alt="" />
    </Loading>
  );
};

export default CardList;
