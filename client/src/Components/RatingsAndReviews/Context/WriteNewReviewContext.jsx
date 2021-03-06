import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { MainContext } from '../../../contexts/MainContextProvider';

export const WriteReviewContext = createContext();

const WriteReviewProvider = (props) => {
  const { children } = props;
  const { currProduct } = useContext(MainContext);
  const productId = currProduct.currProd;

  const [review, setReview] = useState({
    product_id: productId,
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

  const changeCharacteristic = (data) => {
    Object.entries(data).forEach((entry) => {
      const [key, value] = entry;
      if (chara[key]) {
        setChara((oldChar) => (
          { ...oldChar, [key]: { ...oldChar[key], id: value.id } }));
      }
    });
  };

  const changeRequestCharacteristic = (data) => {
    const container = {};
    Object.values(data).forEach((entry) => {
      if (container[entry.id] === undefined) {
        container[entry.id] = null;
      }
    });
    changeCharacteristic(data);
    return container;
  };

  const getRequest = () => {
    axios.get(`/api/reviews/meta?product_id=${currProduct.currProd}`)
      .then((response) => setReview({
        ...review,
        characteristics: changeRequestCharacteristic(response.data.characteristics),
      }))
      .catch((error) => error.send(error));
  };

  useEffect(getRequest, [productId]);

  return (
    <WriteReviewContext.Provider value={
      { reviewData: [review, setReview], characteristicData: [chara, setChara] }
    }
    >
      {children}
    </WriteReviewContext.Provider>
  );
};

export default WriteReviewProvider;

WriteReviewProvider.propTypes = {
  children: PropTypes.shape({
    reviewData: PropTypes.node,
    characteristicData: PropTypes.node,
  }),
};

WriteReviewProvider.defaultProps = {
  children: 'There are no children',
};
