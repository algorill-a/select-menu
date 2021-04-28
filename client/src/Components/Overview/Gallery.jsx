/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import Styled from 'styled-components';
import {
  IoIosArrowBack, IoIosArrowForward, IoIosArrowUp, IoIosArrowDown
} from 'react-icons/io';
import { StyleContext } from './StyleContext.jsx';

const ViewContainer = Styled.div`
  height: 600px;
  width: 50%;
  background: #E8E8E8;
  margin-left: 10%;
`;

const ImagesOverlay = Styled.div`
  position: absolute;
  height: 75px;
  width: 75px;
  // margin: 0 auto;
`;

const Image = Styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 10;
  right: 420%;
  left: 20px;
  top: 20px;
  border-radius: 0.12em;
  cursor: pointer;
  opacity: 55%;
  :hover {
    opacity: 95%;
  }
`;

const UpArrow = Styled.button`
  cursor: pointer;
  position: absolute;
  right: 392%;
  z-index: 10;
  left: 12.8%;
  top: 60px;
  width: 50px;
  opacity: 30%;
  :hover {
    opacity: 80%;
  }
`;

const DownArrow = Styled.button`
  cursor: pointer;
  position: absolute;
  right: 392%;
  z-index: 10;
  left: 12.8%;
  top: 650px;
  width: 50px;
  opacity: 30%;
  :hover {
    opacity: 80%;
  }
`;

const DefaultViewContainer = Styled.div`
  height: 600px;
  // position: relative;
  // border-radius: 10px;
  // background: lightgreen;
`;

const DefaultView = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  object-fit: cover;
`;

const DefaultViewSlide = Styled.li`
  height: 75%;
  width: 100%;
`;

const DefaultViewImage = Styled.img`
  width: 100%;
  height: 600px;
  border-radius: 0.12em;
  object-fit: cover;
`;

const RightArrow = Styled.button`
  position: absolute;
  top: 360px;
  right: 38%;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  height: 50px;
  opacity: 30%;
  :hover {
    opacity: 80%;
  }
`;

const LeftArrow = Styled.button`
  position: absolute;
  top: 360px;
  left: 8.2%;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  height: 50px;
  opacity: 30%;
  :hover {
    opacity: 80%;
  }
`;

const Gallery = () => {
  const { currentStylePhotos, currentImage, setCurrentImage } = useContext(StyleContext);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(true);

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? currentStylePhotos.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === currentStylePhotos.length - 1 ? 0 : currentImage + 1);
  };

  const updateDefaultView = (index) => {
    setCurrentImage(index);
  };

  const prevThumbnail = () => {
    const start = thumbnailIndex === 0;
    if (!start) {
      setShowStart(true);
      setShowEnd(true);
      const index = thumbnailIndex - 1;
      setThumbnailIndex(index);
    } else {
      setShowStart(false);
    }
  };

  const nextThumbnail = () => {
    const end = thumbnailIndex + 7 === currentStylePhotos.length - 1;
    if (!end) {
      setShowStart(true);
      setShowEnd(false);
      const index = thumbnailIndex + 1;
      setThumbnailIndex(index);
    } else {
      setShowEnd(false);
    }
  };

  const photo = (currentStylePhotos !== null)
    ? currentStylePhotos.map((image, index) => (
      <DefaultViewSlide key={index}>
        {index === currentImage
        && (<DefaultViewImage src={image.url} alt={image} key={index} />)}
      </DefaultViewSlide>
    )) : <Image src="../../dist/gorilla.gif" />;

  const activeThumbnails = currentStylePhotos.slice(thumbnailIndex,
    thumbnailIndex + 7);
  // const thumbnailsToDisplay = activeThumbnails.length < 7
  //   ? [...activeThumbnails,
  //     ...currentStylePhotos.slice(0, 7 - activeThumbnails.length)] : activeThumbnails;

  return (
    <ViewContainer>
      <LeftArrow onClick={previousImage}><IoIosArrowBack /></LeftArrow>
      <RightArrow onClick={nextImage}><IoIosArrowForward /></RightArrow>
      <DefaultViewContainer>
        {showStart ? <UpArrow onClick={prevThumbnail}><IoIosArrowUp /></UpArrow> : null}
        <ImagesOverlay>
          {activeThumbnails.map((thumbnail, index) => (
            <Image
              src={thumbnail.thumbnail_url}
              key={thumbnail.thumbnail_url}
              onClick={() => updateDefaultView(index)}
            />
          ))}
        </ImagesOverlay>
        {showEnd ? <DownArrow onClick={nextThumbnail}><IoIosArrowDown /></DownArrow> : null }
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
