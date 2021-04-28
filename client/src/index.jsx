/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';
import MainContextProvider from './contexts/MainContextProvider.jsx';
import CardContextProvider from './contexts/CardContext.jsx';
import ModalContextProvider from './contexts/ModalContext.jsx';
import OutfitContextProvider from './contexts/OutfitContext.jsx';
import ReviewListProvider from './Components/RatingsAndReviews/Context/ReviewListContext.jsx';
import ReviewBreakdownProvider from './Components/RatingsAndReviews/Context/ReviewBreakdownContext.jsx';
import WriteReviewProvider from './Components/RatingsAndReviews/Context/WriteNewReviewContext.jsx';
import ReviewButtonProvider from './contexts/ReviewButtonContext.jsx';
import Overview from './Components/Overview/Overview.jsx';
import CardList from './Components/Related/CardList.jsx';
import ProductsContextProvider from './Components/Overview/ProductsContext.jsx';
import StyleContextProvider from './Components/Overview/StyleContext.jsx';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';
import ComparisonModal from './Components/Related/ComparisonModal.jsx';

const Header = Styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

function App() {
  return (
    <div>
      <Header> ALGORILLA </Header>
      <MainContextProvider>
        <ModalContextProvider>
          <ProductsContextProvider>
            <StyleContextProvider>
              <CardContextProvider>
                <OutfitContextProvider>
                  <Overview />
                  <CardList />
                </OutfitContextProvider>
              </CardContextProvider>
              <WriteReviewProvider>
                <ReviewListProvider>
                  <ReviewBreakdownProvider>
                    <ReviewButtonProvider>
                      <RatingsAndReviews />
                    </ReviewButtonProvider>
                  </ReviewBreakdownProvider>
                </ReviewListProvider>
              </WriteReviewProvider>
            </StyleContextProvider>
          </ProductsContextProvider>
          <ComparisonModal />
        </ModalContextProvider>
      </MainContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
