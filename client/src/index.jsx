/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import MainContextProvider from './contexts/MainContextProvider.jsx';
import CardContextProvider from './contexts/CardContext.jsx';
import ModalContextProvider from './contexts/ModalContext.jsx';
import OutfitContextProvider from './contexts/OutfitContext.jsx';
import Overview from './Components/Overview/Overview.jsx';
import CardList from './Components/Related/CardList.jsx';
import ProductsContextProvider from './Components/Overview/ProductsContext.jsx';
import StyleContextProvider from './Components/Overview/StyleContext.jsx';
import RatingsAndReviews from './Components/RatingsAndReviews/index.jsx';
import ComparisonModal from './Components/Related/ComparisonModal.jsx';

function App() {
  return (
    <div>
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
              <RatingsAndReviews />
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
