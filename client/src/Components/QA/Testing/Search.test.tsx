import React from 'react'
import ReactDOM from 'react-dom';
import { getQueriesForElement, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from '../App.jsx';
import QuestionItem from '../QuestionItem.jsx';
import QuestionList from '../QuestionList.jsx';
import Search from '../Search.jsx';
import Helpful from '../Helpful.jsx';

test("it renders the App component", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
})

test("it renders the QuestionItem component", () => {
  const root = document.createElement("div");
  ReactDOM.render(<QuestionItem />, root);
})

// test("it renders the QuestionList component", () => {
//   const root = document.createElement("div");
//   ReactDOM.render(<QuestionList />, root);
// })

test("it renders the Search component", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Search />, root);
})

test("it contains the right text", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
  const {getByText} = getQueriesForElement(root);
  expect(getByText("QUESTIONS & ANSWERS")).not.toBeNull();
})


test("test the helpful button", () => {
  const { getByTestId } = render(<Helpful />)

  expect(getByTestId('display')).toHaveTextContent('0')

  fireEvent.click(getByTestId('button'))

  expect(getByTestId('display')).toHaveTextContent('1')

})