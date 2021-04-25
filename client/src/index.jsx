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

function App() {
  return (
    <div>
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
          </StyleContextProvider>
        </ProductsContextProvider>
      </MainContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
