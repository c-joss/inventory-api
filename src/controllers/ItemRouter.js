const express = require('express');

const itemRouter = express.Router();

itemRouter.get('/', (request, response) => {
  response.json({ message: 'Item route working' });
});

module.exports = itemRouter;
