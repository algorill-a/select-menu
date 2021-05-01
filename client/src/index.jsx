/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { createRef } from 'react';
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
import FilterStarProvider from './contexts/FilterStarContext.jsx';
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

const ContainerGrid = Styled.div`
  display: grid;
  grid-template-columns: 2fr fit-content(8ch) fit-content(8ch) 4fr 2fr;
  grid-template-rows: 2fr repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
  width: 100vw;
`;

const DivOne = Styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const DivTwo = Styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;

const DivThree = Styled.div`
  grid-area: 3 / 2 / 4 / 3;
`;

const DivFour = Styled.div`
  grid-area: 1 / 1 / 4 / 2;
`;

const DivFive = Styled.div`
  grid-area: 1 / 3 / 4 / 4;
`;

const App = () => {
  const ratingsAndReviewsRef = createRef();
  const focus = () => {
    ratingsAndReviewsRef.current.scrollIntoView();
  };

  return (
    <div>
      <Header> ALGORILLA </Header>
      <MainContextProvider>
        <ModalContextProvider>
          <ProductsContextProvider>
            <StyleContextProvider>
              <CardContextProvider>
                <OutfitContextProvider>
                  <WriteReviewProvider>
                    <ReviewListProvider>
                      <ReviewBreakdownProvider>
                        <ReviewButtonProvider>
                          <FilterStarProvider>
                            <ContainerGrid>
                              <DivOne>
                                <Overview focus={focus} />
                              </DivOne>
                              <DivTwo>
                                <CardList />
                              </DivTwo>
                              <DivThree>
                                <div ref={ratingsAndReviewsRef} />
                                <RatingsAndReviews />
                              </DivThree>
                              <DivFour>{' '}</DivFour>
                              <DivFive>{' '}</DivFive>
                            </ContainerGrid>
                          </FilterStarProvider>
                        </ReviewButtonProvider>
                      </ReviewBreakdownProvider>
                    </ReviewListProvider>
                  </WriteReviewProvider>
                </OutfitContextProvider>
              </CardContextProvider>
            </StyleContextProvider>
          </ProductsContextProvider>
          <ComparisonModal />
        </ModalContextProvider>
      </MainContextProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
