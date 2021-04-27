/* eslint-disable import/extensions */
import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import SortingOptions from './SortingOptions.jsx';
import { ReviewListContext } from '../Context/ReviewListContext.jsx';
import { MainContext } from '../../../contexts/MainContextProvider.jsx';

const Div = styled.div`
  padding: 0;
  overflow: scroll;
`;

const ReviewsList = () => {
  const [list, setList] = useContext(ReviewListContext);
  const { currProduct } = useContext(MainContext);

  const productId = currProduct.currProd;
  const getList = () => {
    axios.get(`/api/reviews?product_id=${productId}`)
      .then((response) => setList(response.data.results))
      .catch((error) => console.log(error));
  };
  useEffect(getList, [currProduct]);

  return (
    <>
      <Div>
        <SortingOptions />
      </Div>
      <Div>
        {list.slice(0).map((tile) => (
          <ReviewTile
            tile={tile}
            key={Math.random()}
          />
        ))}
      </Div>
    </>
  );
};

export default ReviewsList;
// changed line 33 to add slice (incorporate renderlist)
