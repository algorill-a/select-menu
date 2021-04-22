/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const controllers = require('./controllers');

const app = express();
const port = 1337;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/*', controllers.get);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
