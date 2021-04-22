import React, { useContext } from 'react';
import Styled from 'styled-components';
import { BsArrowUpShort, BsArrowDownShort, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { ProductsContext } from './ProductsContext.jsx';

const ViewContainer = Styled.div`
  height: 100%;
  width: 50%;
  margin: 0 auto;
`;

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
  height: 100%;
  position: relative;
  background: grey;
  border-radius: 10px;
`;

const DefaultView = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: black;
  border-radius: 10px;
`;

const DefaultViewImage = Styled.img`
  width: 100%;
  height: 100%;
  border-radius 10px;
  object-fit: cover;
`;

const DefaultViewSlide = Styled.li`
  height: 50%;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const RightArrow = Styled.button`
  position: absolute;
  top: 25%;
  right: 25%;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const LeftArrow = Styled.button`
  position: absolute;
  top: 25%;
  left: 25%;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const Gallery = () => {
  const { images, currentImage, setCurrentImage } = useContext(ProductsContext);

  const previousSlide = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextSlide = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const updateDefaultView = (index) => {
    setCurrentImage(index);
  };

  let photos = [];
  let photo = null;
  if (images !== null) {
    photos = images.map((image, index) => <Image src={image.thumbnail_url} alt="place-holder" key={index} onClick={() => updateDefaultView(index)} />);
    photo = images.map((image, index) => (
      <DefaultViewSlide key={index}>
        {index === currentImage && (<DefaultViewImage src={image.thumbnail_url} alt={image} key={index} />)}
      </DefaultViewSlide>
    ))
  }

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
          { /* refactor and map over products list to display an image for each line */ }
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