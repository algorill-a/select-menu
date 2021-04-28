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
import { StyleContext } from '../Overview/StyleContext.jsx';

// Styled Components
const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  margin-top: 5em;
  margin-left: 8em;
`;

const CardListContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin-top: 3em;
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

const AddOutfitContainer = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 400px;
  padding: 10px 12px 10px;
  background: #ededed;
  overflow: hidden;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
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
  const { setCurrentRating } = useContext(StyleContext);
  const { addToOutfitCard } = useContext(OutfitContext);
  let productId;
  let ratings = 0;
  let sum = 0;

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(true);

  const [currentOutfitIndex, setCurrentOutfitIndex] = useState(0);
  const [showOutfitStart, setShowOutfitStart] = useState(false);
  const [showOutfitEnd, setShowOutfitEnd] = useState(true);

  const getProducts = (endpoint) => fetch(`api/${endpoint}`)
    .then((res) => res.json());

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
                sum += (parseInt(reviews.ratings[[keys[i]]], 10));
              }
              ratings = Math.ceil(ratings / sum);
            } else {
              ratings = 0;
            }
            setCurrentRating(ratings);
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

  // handlers for Related Items carousel
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
    const end = currentCardIndex + 4 === cards.length - 1;
    if (!end) {
      setShowStart(true);
      setShowEnd(true);
      const index = currentCardIndex + 1;
      setCurrentCardIndex(index);
    } else {
      setShowEnd(false);
    }
  };

  // handlers for Outfit carousel
  const prevOutfit = () => {
    const start = currentOutfitIndex === 0;
    if (!start) {
      setShowOutfitStart(true);
      setShowOutfitEnd(true);
      const index = currentOutfitIndex - 1;
      setCurrentOutfitIndex(index);
    } else {
      setShowOutfitStart(false);
    }
  };

  const nextOutfit = () => {
    const end = currentOutfitIndex + 2 === outfitList.length - 1;
    if (!end) {
      setShowOutfitStart(true);
      setShowOutfitEnd(true);
      const index = currentOutfitIndex + 1;
      setCurrentOutfitIndex(index);
    } else {
      setShowOutfitEnd(false);
    }
  };

  const activeCards = cards.slice(currentCardIndex, currentCardIndex + 4);
  const cardsToDisplay = activeCards.length < 4
    ? [cards.slice(currentCardIndex, currentCardIndex + 4)] : activeCards;

  const outfitsToDisplay = outfitList.length > 3
    ? outfitList.slice(currentOutfitIndex, currentOutfitIndex + 4) : outfitList;

  return cards.length ? (
    <>
      <Title>Related Items</Title>
      <CardListContainer>
        {showStart ? <IconLeft onClick={prevCard}><IoIosArrowBack /></IconLeft> : null}
        {showEnd ? <IconRight onClick={nextCard}><IoIosArrowForward /></IconRight> : null}
        {cardsToDisplay.map((card, index) => (
          <Card card={card} key={index} value={card.prodId} />))}
      </CardListContainer>

      <Title>Outfit List</Title>
      {outfitList.length ? (
        <>
          <CardListContainer>
            <AddOutfitContainer>
              <AddButton onClick={addToOutfitCard}><IoIosAddCircle size={100} /></AddButton>
              Add to Outfit
            </AddOutfitContainer>
            {outfitsToDisplay.map((outfit) => (
              <Outfit outfit={outfit} key={outfit.id} value={outfit.prodId} />))}
            {showOutfitStart ? <IconLeft onClick={prevOutfit}><IoIosArrowBack /></IconLeft> : null}
            {showOutfitEnd
              ? (<IconRight onClick={nextOutfit}><IoIosArrowForward /></IconRight>) : null}
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
  ) : null;
};

export default CardList;
