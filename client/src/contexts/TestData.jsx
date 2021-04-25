import React, { createContext, useEffect, useState } from 'react';

export const TestDataContext = createContext();

const TestDataContextProvider = (props) => {
  const [data, setData] = useState([{
    imageUrl: '', prodCategory: '', prodName: '', price: '', id: 0,
  }]);

  const getProducts = (endpoint) =>
    fetch(`api/${endpoint}`)
      .then((res) => res.json());

  useEffect(() => {
    getProducts('products/23147/related')
      .then((data2) => getProducts(`products/${data2[0]}`))
      .then((data3) => setData({ prodCategory: data3.category, prodName: data3.name }));
  }, []);

  return (
    <TestDataContext.Provider value={{ data }}>
      {props.children}
    </TestDataContext.Provider>
  );
};

export default TestDataContextProvider;

/**
 *   useEffect(() => {
    getProducts('products')
      .then((data2) => data2.forEach(item => {
        getProducts(`products/${item.id}/related`)
          .then((data3) => console.log(data3))
      }))
  }, []);
 */