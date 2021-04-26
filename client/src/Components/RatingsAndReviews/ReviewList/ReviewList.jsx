/* eslint-disable import/extensions */
import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import SortingOptions from './SortingOptions.jsx';
import { ReviewListContext } from '../Context/ReviewListContext.jsx';

const count = 2;
const Div = styled.div`
  padding: 0;
  overflow: scroll;
`;
const Button = styled.button`
  padding: 15px;
  margin: 15px;
  color: #FDFF93;
  background-color: rgba(26, 117, 62);
  font-size: 17px;
  font-weight: bold;
  border: 2px solid #196838;
  border-radius: 15px;;
  box-shadow: 1px 3px 3px #5B5347;
  outline: 0;
`;

const ReviewsList = () => {
  const [list, setList] = useContext(ReviewListContext);
  const [toggle, setToggle] = useState(false);

  const id = 23146;
  const getList = () => {
    axios.get(`/api/reviews?product_id=${id}`)
      .then((response) => setList(response.data.results))
      .catch((error) => console.log(error));
  };
  useEffect(getList, []);

  const toggleSearch = () => {
    setToggle(!toggle);
  };

  const renderList = () => {
    if (toggle) {
      return list.slice(0, count + 2);
    }
    return list.slice(0, count);
  };

  return (
    <>
      <Div>
        <SortingOptions />
      </Div>
      <Div>
        {renderList().map((tile) => (
          <ReviewTile
            tile={tile}
            key={Math.random()}
          />
        ))}
        <Button type="button" onClick={toggleSearch}>{toggle ? 'Go Back' : 'Read more reviews'}</Button>
      </Div>
    </>
  );
};

export default ReviewsList;
