/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import Styled from 'styled-components';
import {
  IoIosArrowBack, IoIosArrowForward, IoIosArrowUp, IoIosArrowDown,
} from 'react-icons/io';
import { StyleContext } from './StyleContext.jsx';

const ViewContainer = Styled.div`
  position: relative;
  height: 690px;
  width: 80%;
  margin-left: 15%;
  cursor: zoom-in;
`;

const ImagesOverlay = Styled.div`
  position: absolute;
  height: 75px;
  width: 75px;
`;

const Image = Styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  right: 420%;
  left: 30px;
  top: 23px;
  border-radius: 0.12em;
  cursor: pointer;
  opacity: 55%;
  :hover {
    opacity: 95%;
  }
`;

// const ExpandedImage = Styled.Image`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: relative;
//   right: 420%;
//   left: 30px;
//   top: 23px;
//   border-radius: 0.12em;
//   border-style: 'solid';
//   border-color: 'white';
//   border-width: 'thin';
//   cursor: pointer;
//   opacity: '100%'
//   :hover {
//     opacity: 95%;
//   }
// `;

const UpArrow = Styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  left: 42.5px;
  width: 50px;
  opacity: 30%;
  :hover {
    opacity: 80%;
  }
`;

const DownArrow = Styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  left: 42.5px;
  top: 575px;
  width: 50px;
  opacity: 30%;
  :hover {
    opacity: 80%;
  }
`;

const DefaultViewContainer = Styled.div`
  height: 690px;
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
  height: 690px;
  border-radius: 0.12em;
  object-fit: cover;
`;

const RightArrow = Styled.button`
  position: absolute;
  top: 45%;
  color: black;
  cursor: pointer;
  user-select: none;
  height: 50px;
  opacity: 30%;
  :hover {
    opacity: 80%;
  }
  right: 0;
`;

const LeftArrow = Styled.button`
  position: absolute;
  top: 45%;
  color: black;
  cursor: pointer;
  user-select: none;
  height: 50px;
  opacity: 30%;
  :hover {
    opacity: 80%;
  }
  z-index: 1;
`;

const Gallery = () => {
  const { currentStylePhotos, currentImage, setCurrentImage } = useContext(StyleContext);
  const [viewToggle, setView] = useState(null);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? currentStylePhotos.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === currentStylePhotos.length - 1 ? 0 : currentImage + 1);
  };

  const prevThumbnail = () => {
    const start = currentImage === 0;
    if (!start) {
      setShowUpArrow(true);
      setShowDownArrow(true);
      const index = currentImage - 1;
      setCurrentImage(index);
    } else {
      setShowUpArrow(false);
    }
  };

  const nextThumbnail = () => {
    const end = currentImage + 7 === currentStylePhotos.length;
    if (!end) {
      setShowUpArrow(true);
      setShowDownArrow(true);
      const index = currentImage + 1;
      setCurrentImage(index);
    } else {
      setShowDownArrow(false);
    }
  };

  const photo = (currentStylePhotos.length !== 0)
    ? currentStylePhotos.map((image) => (
      <DefaultViewSlide key={image.index}>
        {image.index === currentImage
        && (<DefaultViewImage src={image.url} alt={image} key={image.index} />)}
      </DefaultViewSlide>
    )) : <Image />;

  const activeThumbnails = (() => {
    if (currentStylePhotos.length < 7) {
      return currentStylePhotos;
    }
    if (currentStylePhotos.length - 7 > currentImage) {
      return currentStylePhotos.slice(currentImage, currentImage + 7);
    }
    return currentStylePhotos.slice(currentStylePhotos.length - 7, currentStylePhotos.length);
  })();

  useEffect(() => {
    if (currentStylePhotos.length > 7) {
      setShowDownArrow(true);
    }
  }, [currentStylePhotos]);

  const expandedView = () => {
    if (viewToggle === null) {
      setView({
        width: '120%',
        cursor: 'zoom-out',
        zIndex: '10',
      });
    } else {
      setView(null);
    }
  };

  return (
    <ViewContainer
      style={viewToggle !== null
        ? { width: viewToggle.width, zIndex: viewToggle.zIndex, cursor: viewToggle.cursor } : null}
    >
      <LeftArrow onClick={previousImage}><IoIosArrowBack /></LeftArrow>
      <RightArrow
        onClick={nextImage}
        style={viewToggle !== null ? { left: viewToggle.buttonPosition } : null}
      >
        <IoIosArrowForward />
      </RightArrow>
      <DefaultViewContainer>
        <ImagesOverlay>
          {showUpArrow ? <UpArrow onClick={prevThumbnail}><IoIosArrowUp /></UpArrow> : null}
          {activeThumbnails.map((thumbnail) => (
            <Image
              style={(thumbnail.index === currentImage) ? {
                opacity: '100%', borderStyle: 'solid', borderColor: 'white', borderWidth: 'thin',
              } : null}
              src={thumbnail.thumbnail_url}
              key={thumbnail.index}
              onClick={() => setCurrentImage(thumbnail.index)}
            />
          ))}
          {showDownArrow
            ? (
              <DownArrow
                onClick={nextThumbnail}
              >
                <IoIosArrowDown />
              </DownArrow>
            ) : null }
        </ImagesOverlay>
        <DefaultView
          onClick={expandedView}
        >
          {photo}
        </DefaultView>
      </DefaultViewContainer>
    </ViewContainer>
  );
};

export default Gallery;
