import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Components/Overview/Overview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Overview />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
