const express = require('express');
const { ItemModel } = require('../models/ItemModel');

const itemRouter = express.Router();

itemRouter.get('/', async (request, response) => {
  const items = await ItemModel.find();
  response.json(items);
});

itemRouter.post('/', async (request, response) => {
  const { name, category, stockQuantity } = request.body;

  const newItem = await ItemModel.create({
    name,
    category,
    stockQuantity,
  });

  response.status(201).json(newItem);
});

module.exports = itemRouter;
