const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/teste', (req, res) =>
  res.status(200).send({ message: 'bem vindo a API' }),
);

app.listen(port, () => console.log(`Server is runner ${port}`));

module.exports = app;
