import React from 'react';
import ReactDOM from 'react-dom';
import CardContextProvider from './contexts/CardContext.jsx';
import CardList from './Components/Related/CardList.jsx';

function App() {
  return (
    <div>
      <CardContextProvider>
        <CardList />
      </CardContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
