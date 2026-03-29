const express = require('express');
const { ItemModel } = require('../models/ItemModel');

const itemRouter = express.Router();

itemRouter.get('/', async (request, response) => {
  const { category, lowStock } = request.query;

  let query = {};

  if (category) {
    query.category = category;
  }

  const items = await ItemModel.find(query);

  const itemsWithStockInfo = items.map((item) => {
    return {
      ...item.toObject(),
      lowStock: item.stockQuantity <= 5,
    };
  });

  let result = itemsWithStockInfo;

  if (lowStock === 'true') {
    result = itemsWithStockInfo.filter((item) => item.lowStock);
  }

  response.json(result);
});

itemRouter.get('/:id', async (request, response) => {
  const item = await ItemModel.findById(request.params.id);

  if (!item) {
    return response.status(404).json({ error: 'Item not found' });
  }

  response.json({
    ...item.toObject(),
    lowStock: item.stockQuantity <= 5,
  });
});

itemRouter.post('/', async (request, response) => {
  const { name, category, stockQuantity } = request.body;

  if (!name || !category || stockQuantity === undefined) {
    return response.status(400).json({
      error: 'name, category and stockQuantity are required',
    });
  }

  if (stockQuantity < 0) {
    return response.status(400).json({
      error: 'stockQuantity must be 0 or greater',
    });
  }

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
