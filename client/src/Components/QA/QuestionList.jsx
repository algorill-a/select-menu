import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Context from './UserContext.jsx';
import QuestionItem from './QuestionItem.jsx';
import authorization from '../../../../config.js';

const QuestionList = () => {
  const { state } = useContext(Context);
  const [questions, setQuestions] = useState([]);
  // const defaultList = state.list.slice(0, 4);

  useEffect(() => {
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=23147', {
      headers: authorization,
      // params: { product_id: productID },
    })
      .then((res) => {
        console.log(res);
        setQuestions(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      <ul>
        {questions.map((question, index) => (
          <QuestionItem
            question={question.question_body}
            key={question.question_id}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
