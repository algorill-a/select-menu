import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { getQueriesForElement } from '@testing-library/dom';
// import { render, fireEvent } from '@testing-library/react';

import App from '../index.jsx';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

test('renders the correct content', () => {
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);

  expect(root.querySelector('h1').textContent).toBe('HELLO THERE!');
});
