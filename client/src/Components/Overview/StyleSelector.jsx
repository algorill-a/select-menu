/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import Styled from 'styled-components';
import { StyleContext } from './StyleContext.jsx';
import { MainContext } from '../../contexts/MainContextProvider.jsx';

const StylesContainer = Styled.div`
  position: absolute;
  top: 350px;
  left: 65%;
`;

const ThumbnailContainer = Styled.button`
  display: inline-block;
  width: 70px;
  height: 70px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 2px;
`;

const Thumbnail = Styled.img`
  height: 150%;
  width: 150%;
  object-fit: cover;
  margin-left: -25%;
  margin-top: -25%;
  cursor: pointer;
`;

const StyleName = Styled.h3`
  font-family: 'Montserrat', sans-serif;
`;

const StyleSelector = () => {
  const {
    allStyles,
    currentStyle,
    setCurrentStyle,
    setCurrentStyleName,
    currentStyleName,
  } = useContext(StyleContext);
  const { currProduct, changeProduct } = useContext(MainContext);

  return (
    <StylesContainer>
      <StyleName>{`Style > ${currentStyleName}`}</StyleName>
      {(allStyles !== null) ? allStyles.map((photo) => (
        <ThumbnailContainer key={photo.style_id}>
          <Thumbnail
            src={photo.photo}
            key={photo.style_id}
            onClick={() => {
              if (photo.style_id !== currentStyle) {
                changeProduct({ currProd: currProduct.currProd, currStyle: photo.style_id });
                setCurrentStyleName(photo.name);
                setCurrentStyle(photo.style_id);
              }
            }}
          />
        </ThumbnailContainer>
      )) : null }
    </StylesContainer>
  );
};

export default StyleSelector;
