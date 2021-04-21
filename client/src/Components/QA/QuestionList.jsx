import React, { useState, useContext } from 'react';
import Context from './UserContext.jsx';
import QuestionItem from './QuestionItem.jsx';

const QuestionList = () => {
  const { state } = useContext(Context);
  const defaultList = state.list.slice(0, 4);

  return (
    <div>
      <ul>
        {defaultList.map((question, index) => (
          <QuestionItem
            question={question.question}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
