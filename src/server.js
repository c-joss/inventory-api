const express = require('express');
const itemRouter = require('./controllers/ItemRouter');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Inventory API running' });
});

app.use('/items', itemRouter);

module.exports = { app };
