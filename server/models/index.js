const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  getAll: (endpoint) => {
    const options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo${endpoint}`,
      method: 'get',
      headers: {
        'User-Agent': 'request',
        Authorization: config.TOKEN,
      },
    };
    return axios(options);
  },
  postAll: (req, endpoint) => {
    const options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo${endpoint}`,
      method: 'post',
      data: req,
      headers: {
        'User-Agent': 'request',
        Authorization: config.TOKEN,
      },
    };
    return axios(options);
  },
};
