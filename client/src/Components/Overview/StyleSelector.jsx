/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import Styled from 'styled-components';
import { StyleContext } from './StyleContext.jsx';
import { MainContext } from '../../contexts/MainContextProvider.jsx';

const StylesContainer = Styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  z-index: 10;
`;

const ThumbnailContainer = Styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

const Thumbnail = Styled.img`
  height: 150%;
  width: 150%;
  object-fit: cover;
  margin-left: -25%;
  margin-top: -25%;
`;

const StyleName = Styled.h2`
`;

const StyleSelector = () => {
  const { allStyles, setCurrentStyle, setCurrentStyleName, currentStyleName } = useContext(StyleContext);
  const { currProduct } = useContext(MainContext);
  const { changeProduct } = useContext(MainContext);

  return (
    <StylesContainer>
      <StyleName>{currentStyleName}</StyleName>
      {(allStyles !== null) ? allStyles.map((photo) => <ThumbnailContainer key={photo.style_id}><Thumbnail src={photo.photo} key={photo.style_id} onClick={() => {
        setCurrentStyle(photo.style_id);
        setCurrentStyleName(photo.name);
        changeProduct({ currProd: currProduct.currProd, currStyle: photo.style_id });
        }} /></ThumbnailContainer>) : <img src="https://cdn.discordapp.com/attachments/831605836996411443/834994007725441034/gorilla_fly2.gif" alt="" /> }
    </StylesContainer>
  );
};

export default StyleSelector;
