/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';
import { ReviewListContext } from '../Context/ReviewListContext.jsx';
import { ReviewButtonContext } from '../../../contexts/ReviewButtonContext.jsx';

const DivTwo = styled.div`
  padding: 0;
  overflow: scroll;
`;

const ReviewsList = () => {
  const [list] = useContext(ReviewListContext);
  const { counts } = useContext(ReviewButtonContext);
  const [count] = counts;

  const renderList = () => (
    list.slice(0, count)
  );

  return (
    <div>
      <DivTwo>
        {renderList().slice(0).map((tile) => (
          <ReviewTile
            tile={tile}
            key={Math.random()}
          />
        ))}
      </DivTwo>
    </div>
  );
};

export default ReviewsList;
// changed line 33 to add slice (incorporate renderlist)
