import React, { useState, useContext } from 'react';
import Context from './UserContext.jsx';
import AnswerItem from './AnswerItem.jsx';

const AnswerList = () => {
  const { state } = useContext(Context);
  const defaultList = state.answers.slice(0, 2);

  return (
    <div>
      <ul>
        {defaultList.map((answer, index) => (
          <AnswerItem
            answer={answer.answer}
            name={answer.name}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default AnswerList;
