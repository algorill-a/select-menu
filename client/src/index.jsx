/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';
import MainContextProvider from './contexts/MainContextProvider.jsx';
import CardContextProvider from './contexts/CardContext.jsx';
import ModalContextProvider from './contexts/ModalContext.jsx';
import OutfitContextProvider from './contexts/OutfitContext.jsx';
import Overview from './Components/Overview/Overview.jsx';
import CardList from './Components/Related/CardList.jsx';
import ProductsContextProvider from './Components/Overview/ProductsContext.jsx';
import StyleContextProvider from './Components/Overview/StyleContext.jsx';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';

const Header = Styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

function App() {
  return (
    <div>
      <Header> ALGORILLA </Header>
      <MainContextProvider>
        <ProductsContextProvider>
          <StyleContextProvider>
            <Overview />
            <CardContextProvider>
              <OutfitContextProvider>
                <ModalContextProvider>
                  <CardList />
                </ModalContextProvider>
              </OutfitContextProvider>
            </CardContextProvider>
            <RatingsAndReviews />
          </StyleContextProvider>
        </ProductsContextProvider>
      </MainContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
