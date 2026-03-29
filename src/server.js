const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Inventory API running' });
});

module.exports = { app };
