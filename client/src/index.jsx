import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';
import Overview from './Components/Overview/Overview.jsx'

const ModuleContainer = Styled.div`
`;

const App = () => {
  return (
    <ModuleContainer>
      <Overview />
    </ModuleContainer>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
