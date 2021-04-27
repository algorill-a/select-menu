/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';
import { MainContext } from '../../../contexts/MainContextProvider.jsx';

export const WriteReviewContext = createContext();

const WriteReviewProvider = (props) => {
  const { currProduct } = useContext(MainContext);
  const [review, setReview] = useState({
    product_id: currProduct.currProd,
    rating: null,
    summary: '',
    body: '',
    recommend: null,
    name: '',
    email: '',
    photos: [],
    characteristics: {},
  });

  const [chara, setChara] = useState({
    Size: {
      options: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
      id: null,
      placeholder: 'Please Select',
    },
    Width: {
      options: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      id: null,
      placeholder: 'Please Select',
    },
    Comfort: {
      options: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      id: null,
      placeholder: 'Please Select',
    },
    Quality: {
      options: ['Poor', 'Below average', 'What I expected', 'Pretty Great', 'Perfect'],
      id: null,
      placeholder: 'Please Select',
    },
    Length: {
      options: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      id: null,
      placeholder: 'Please Select',
    },
    Fit: {
      options: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
      id: null,
      placeholder: 'Please Select',
    },
  });

  const changeChara = (data) => {
    Object.entries(data).forEach((entry) => {
      const [key, value] = entry;
      if (chara[key]) {
        setChara((oldChara) => ({ ...oldChara, [key]: { ...oldChara[key], id: value.id } }));
      }
    });
  };

  const changeReqChara = (data) => {
    const container = {};
    Object.values(data).forEach((entry) => {
      if (container[entry.id] === undefined) {
        container[entry.id] = null;
      }
    });
    changeChara(data);
    return container;
  };

  const getRequest = () => {
    axios.get(`/api/reviews/meta?product_id=${review.product_id}`)
      .then((response) => setReview({
        ...review,
        characteristics: changeReqChara(response.data.characteristics),
      }))
      .catch((error) => console.log(error));
  };

  useEffect(getRequest, []);

  return (
    <WriteReviewContext.Provider value={
      { reviewData: [review, setReview], charaData: [chara, setChara] }
    }
    >
      {props.children}
    </WriteReviewContext.Provider>
  );
};

export default WriteReviewProvider;
