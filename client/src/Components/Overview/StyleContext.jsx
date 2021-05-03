/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import { MainContext } from '../../contexts/MainContextProvider.jsx';

export const StyleContext = createContext();

const StyleContextProvider = (props) => {
  const { currProduct } = useContext(MainContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentRating, setCurrentRating] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [currentStyleName, setCurrentStyleName] = useState('');
  const [currentStylePhotos, setCurrentStylePhotos] = useState([]);
  const [currentStyleSkus, setCurrentStyleSkus] = useState(null);
  const [allStyles, setAllStyles] = useState(null);

  const getProducts = (endpoint) => (fetch(`api/${endpoint}`)
    .then((data) => data.json()));

  useEffect(() => {
    getProducts('products')
      .then(() => {
        setCurrentProduct(currProduct.currProd);
        return getProducts(`products/${currProduct.currProd}/styles`);
      })
      .then((productStyles) => {
        setCurrentStyle(productStyles.results[0].style_id);
        setCurrentStyleName(productStyles.results[0].name);
        setCurrentStyleSkus(Object.entries(productStyles.results[0].skus));
        const stylePhotos = [];
        productStyles.results[0].photos.forEach((image, index) => {
          image.index = index;
          stylePhotos.push(image);
        });
        setCurrentStylePhotos(stylePhotos);
        const styles = [];
        productStyles.results.forEach((result) => {
          styles.push({
            name: result.name,
            style_id: result.style_id,
            photo: result.photos[0].thumbnail_url,
          });
        });
        setAllStyles(styles);
      });
  }, []);

  useEffect(() => {
    getProducts(`products/${currProduct.currProd}/styles`)
      .then((productStyles) => {
        const styles = [];
        productStyles.results.forEach((result) => {
          styles.push({
            name: result.name,
            style_id: result.style_id,
            photo: result.photos[0].thumbnail_url,
          });
        });
        setAllStyles(styles);
      });
    // getProducts(`reviews/meta?product_id=${currProduct.currProd}`)
    //   .then((reviews) => {
    //     const keys = Object.keys(reviews.ratings);
    //     if (keys.length > 0) {
    //       for (let i = 0; i < keys.length; i + 1) {
    //         ratings += (parseInt(keys[i], 10) * parseInt(reviews.ratings[[keys[i]]], 10));
    //       }
    //       ratings /= 5;
    //     }
    //     setCurrentRating(ratings);
    //     console.log(currentRating);
    //   });
  }, [currProduct]);

  useEffect(() => {
    getProducts(`products/${currProduct.currProd}/styles`)
      .then((productStyles) => {
        setCurrentImage(0);
        productStyles.results.forEach((result) => {
          if (currentStyle === result.style_id) {
            setCurrentStyleName(
              productStyles.results[productStyles.results.indexOf(result)].name,
            );
            const stylePhotos = [];
            productStyles.results[productStyles.results.indexOf(result)].photos.forEach(
              (image, index) => {
                image.index = index;
                stylePhotos.push(image);
              });
            setCurrentStylePhotos(stylePhotos);
            setCurrentStyleSkus(
              Object.entries(productStyles.results[productStyles.results.indexOf(result)].skus),
            );
          }
        });
      });
  }, [currentStyle]);

  return (
    <StyleContext.Provider value={{
      currentProduct,
      currentStyle,
      setCurrentStyle,
      currentStyleName,
      setCurrentStyleName,
      currentStylePhotos,
      allStyles,
      currentImage,
      setCurrentImage,
      currentStyleSkus,
      currentRating,
      setCurrentRating,
    }}
    >
      {props.children}
    </StyleContext.Provider>
  );
};

export default StyleContextProvider;

// let styles = [];
// productStyles.results.forEach((result) => {
//   styles.push({ style_id: result.style_id, photo: result.photos[0].thumbnail_url });
// }
