import React, { createContext, useState } from 'react';

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [cards, setCards] = useState([{
    imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', prodCategory: 'Shirts', prodName: 'Skull Hand', price: '$14.00', id: 1,
  }, {
    imageUrl: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', prodCategory: 'Shirts', prodName: 'Trails', price: '$16.00', id: 2,
  }, {
    imageUrl: 'https://images.unsplash.com/photo-1605292641958-b1d6c2706484?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHxjbG90aGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', prodCategory: 'Jumper', prodName: 'Jumper', price: '$22.00', id: 3,
  }, {
    imageUrl: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', prodCategory: 'Shirt', prodName: 'Cobbles Classic', price: '$16.00', id: 4,
  }, {
    imageUrl: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80', prodCategory: 'Dress', prodName: 'Red Floral', price: '$21.00', id: 5,
  }, {
    imageUrl: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', prodCategory: 'Shirt', prodName: 'Skull Hand', price: '$14.00', id: 6,
  }, {
    imageUrl: 'https://images.unsplash.com/photo-1546274498-e9bde117a82c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=80', prodCategory: 'Shoes', prodName: 'Brown Nikes', price: '$85.00', id: 7,
  }]);

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <CardContext.Provider value={{ cards, removeCard }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
