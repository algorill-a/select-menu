/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import MainContextProvider from './contexts/MainContextProvider.jsx';
import CardContextProvider from './contexts/CardContext.jsx';
import ModalContextProvider from './contexts/ModalContext.jsx';
import OutfitContextProvider from './contexts/OutfitContext.jsx';
import CardList from './Components/Related/CardList.jsx';

function App() {
  return (
    <div>
      <MainContextProvider>
        <CardContextProvider>
          <OutfitContextProvider>
            <ModalContextProvider>
              <CardList />
            </ModalContextProvider>
          </OutfitContextProvider>
        </CardContextProvider>
      </MainContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
