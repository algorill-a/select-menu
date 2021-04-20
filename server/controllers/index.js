/* eslint-disable no-console */
const models = require('../models');

module.exports = {
  get: (req, res) => {
    const endpoint = req.originalUrl.slice(4);
    return models.getAll(endpoint)
      .then((products) => res.status(200).send(products.data))
      .catch((error) => res.status(401).send(error));
  },
};
