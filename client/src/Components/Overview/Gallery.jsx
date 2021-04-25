/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import Styled from 'styled-components';
import {
  BsArrowUpShort, BsArrowDownShort, BsArrowLeftShort, BsArrowRightShort,
} from 'react-icons/bs';
import { StyleContext } from './StyleContext.jsx';

const ViewContainer = Styled.div`
  display: grid;
  height: 600px;
  width: 60%;
  margin: 25px 25px 25px 100px;
  background: #E8E8E8;
`;

// background: black;

const ImagesOverlay = Styled.div`
  height: 40px;
  width: 10%;
  margin: 0 auto;
`;

const Image = Styled.img`
  width: 100%;
  height: 100%;
  border-radius 10px;
  object-fit: cover;
  position: relative;
  z-index: 10;
  right: 420%;
`;

const UpArrow = Styled.button`
  cursor: pointer;
  position: relative;
  right: 392%;
  z-index: 10;
`;

const DownArrow = Styled.button`
  cursor: pointer;
  position: relative;
  right: 392%;
  z-index: 10;
`;

const DefaultViewContainer = Styled.div`
  // height:60%;
  // position: relative;
  // border-radius: 10px;

  padding: 10px;
  background: lightgreen;
`;

const DefaultView = Styled.ul`
  // display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  // border-radius: 10px;
`;

const DefaultViewSlide = Styled.li`
  height: 75%;
  width: 75%;
  margin-left: 25%;
  margin-right: 25%;
`;

const DefaultViewImage = Styled.img`
  width: 100%;
  height: 600px;
  border-radius 10px;
  object-fit: contain;
`;

const RightArrow = Styled.button`
  position: absolute;
  top: 35%;
  right: 37%;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const LeftArrow = Styled.button`
  position: absolute;
  top: 35%;
  left: 5%;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const Gallery = () => {
  const { currentStylePhotos, currentImage, setCurrentImage } = useContext(StyleContext);

  const previousSlide = () => {
    setCurrentImage(currentImage === 0 ? currentStylePhotos.length - 1 : currentImage - 1);
  };

  const nextSlide = () => {
    setCurrentImage(currentImage === currentStylePhotos.length - 1 ? 0 : currentImage + 1);
  };

  const updateDefaultView = (index) => {
    setCurrentImage(index);
  };

  const photos = (currentStylePhotos !== null) ? currentStylePhotos.map((image, index) => <Image src={image.thumbnail_url} alt="place-holder" key={index} onClick={() => updateDefaultView(index)} />) : <Image src="https://cdn.discordapp.com/attachments/831605836996411443/834994007725441034/gorilla_fly2.gif" />;

  const photo = (currentStylePhotos !== null) ? currentStylePhotos.map((image, index) => <DefaultViewSlide key={index}>
    {index === currentImage && (<DefaultViewImage src={image.url} alt={image} key={index} />)}
    </DefaultViewSlide>) : <Image src="https://cdn.discordapp.com/attachments/831605836996411443/834994007725441034/gorilla_fly2.gif" />;

  return (
    <ViewContainer>
      <ImagesOverlay>
        <UpArrow><BsArrowUpShort /></UpArrow>
        {photos}
        <DownArrow><BsArrowDownShort /></DownArrow>
      </ImagesOverlay>
      <LeftArrow onClick={previousSlide}><BsArrowLeftShort /></LeftArrow>
      <RightArrow onClick={nextSlide}><BsArrowRightShort /></RightArrow>
      <DefaultViewContainer>
        <DefaultView>
          {photo}
        </DefaultView>
      </DefaultViewContainer>
    </ViewContainer>
  );
};

export default Gallery;

// default - display 7 pictures current image + 6 additional images
// click - display current image plus next 6 additional images
// click - if last image of the displayed images is the last image in the array
  // display last image and the previous 6 images before that

  // https://cdn.discordapp.com/attachments/831605836996411443/834994007725441034/gorilla_fly2.gif