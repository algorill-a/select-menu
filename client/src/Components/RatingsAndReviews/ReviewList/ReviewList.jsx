import React, { useContext } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ReviewTile from './ReviewTile';
import { ReviewListContext } from '../Context/ReviewListContext';
import { ReviewButtonContext } from '../../../contexts/ReviewButtonContext';

const DivTwo = styled.div`
  padding: 0;
  overflow: scroll;
`;

const ReviewsList = () => {
  const { copy } = useContext(ReviewListContext);
  const [dupeList] = copy;
  const { counts } = useContext(ReviewButtonContext);
  const [count] = counts;

  const renderList = () => (
    dupeList.slice(0, count)
  );

  return (
    <div>
      <DivTwo>
        {renderList().slice(0).map((tile) => (
          <ReviewTile
            tile={tile}
            key={uuidv4()}
          />
        ))}
      </DivTwo>
    </div>
  );
};

export default ReviewsList;
