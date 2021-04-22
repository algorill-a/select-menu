import { useState } from 'react';

const useGlobalState = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    value: '',
    questionList: 2,
    totalQuestionList: [],
    list: [{ question: 'Will this product fit in my truck?' }, { question: 'Where is this product manufactured?' }],
    answers: [{ answer: 'This product is made in Hawaii', name: 'Steph Curry' }],
    search: '',
  });

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case 'setState':
        return setState(payload);
      default:
        return state;
    }
  };
  return { state, actions };
};

export default useGlobalState;
