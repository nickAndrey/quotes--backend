const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isEditable: Boolean,
});

module.exports = mongoose.model('Quotes', QuoteSchema);
