/* eslint-disable no-console */
const models = require('../models');

module.exports = {
  get: (req, res) => {
    const endpoint = req.originalUrl.slice(4);
    return models.getAll(endpoint)
      .then((products) => res.status(200).send(products.data))
      .catch((error) => res.status(401).send(error));
  },
  post: (req, res) => {
    const endpoint = req.originalUrl.slice(4);
    return models.postAll(req.body, endpoint)
      .then((products) => res.status(200).send(products.data))
      .catch((error) => res.status(401).send(error));
  },
  put: (req, res) => {
    const endpoint = req.originalUrl.slice(4);
    return models.update(endpoint)
      .then((products) => res.send(console.log('success', products.data)))
      .catch((error) => res.status(400).send(error));
  },
};
