const express = require('express');
const { ItemModel } = require('../models/ItemModel');

const itemRouter = express.Router();

itemRouter.get('/', async (request, response) => {
  const items = await ItemModel.find();
  response.json(items);
});

module.exports = itemRouter;
