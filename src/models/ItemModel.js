const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
    min: 0,
  },
});

const ItemModel = mongoose.model('Item', itemSchema);

module.exports = { ItemModel };
