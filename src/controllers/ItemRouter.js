const express = require('express');
const { ItemModel } = require('../models/ItemModel');

const itemRouter = express.Router();

itemRouter.get('/', async (request, response) => {
  const items = await ItemModel.find();
  response.json(items);
});

itemRouter.get('/:id', async (request, response) => {
  const item = await ItemModel.findById(request.params.id);

  if (!item) {
    return response.status(404).json({ error: 'Item not found' });
  }

  response.json(item);
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

itemRouter.patch('/:id', async (request, response) => {
  const updatedItem = await ItemModel.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });

  if (!updatedItem) {
    return response.status(404).json({ error: 'Item not found' });
  }

  response.json(updatedItem);
});

itemRouter.delete('/:id', async (request, response) => {
  const deletedItem = await ItemModel.findByIdAndDelete(request.params.id);

  if (!deletedItem) {
    return response.status(404).json({ error: 'Item not found' });
  }

  response.json({ message: 'Item deleted successfully' });
});

module.exports = itemRouter;
