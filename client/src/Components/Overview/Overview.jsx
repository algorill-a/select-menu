/* eslint-disable import/extensions */
import React from 'react';
import Styled from 'styled-components';
import Gallery from './Gallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';

const StyledGallery = Styled(Gallery)`
grid-area: 1 / 1 / 2 / 2;
`;

const InfoContainer = Styled.div`
grid-area: 1 / 2 / 2 / 3;
margin-right: 30%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 2fr 1.5fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`;

const StyledProductInfo = Styled(ProductInfo)`
grid-area: 1 / 1 / 2 / 2;
`;

const StyledStyleSelector = Styled(StyleSelector)`
grid-area: 2 / 1 / 3 / 2;
`;

const StyledAddToCart = Styled(AddToCart)`
grid-area: 3 / 1 / 4 / 2;
`;

const StyledDescription = Styled(ProductDescription)`
grid-area: 2 / 1 / 3 / 3;
`;

const Container = Styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 2fr .5fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`;

const Overview = (props) => {
  // eslint-disable-next-line react/prop-types
  const { focus } = props;
  return (
    <Container>
      <StyledGallery />
      <InfoContainer>
        <StyledProductInfo focus={focus} />
        <StyledStyleSelector />
        <StyledAddToCart />
      </InfoContainer>
      <StyledDescription />
    </Container>
  );
};

export default Overview;
