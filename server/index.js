const express = require('express');
const path = require('path');

const app = express();
const port = 1337;

app.use(express.static(path.join(__dirname, './client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World from FEC!');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
