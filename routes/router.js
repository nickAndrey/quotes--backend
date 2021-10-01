const { Router } = require('express');
const Quote = require('../models/quote');

const quotesRouter = Router();
quotesRouter.get('/', async (req, res) => res.json({ message: 'API working fine!' }));

quotesRouter.get('/quotes', async (req, res) => {
  try {
    const quotesList = await Quote.find();
    res.json({ data: quotesList });
  } catch (err) {
    res.json({ message: err });
  }
});

quotesRouter.post('/quotes', async (req, res) => {
  const { id, quote, author, isEditable } = req.body;

  const quoteRequest = new Quote({
    id,
    quote,
    author,
    isEditable,
  });

  try {
    const savedItem = await quoteRequest.save();
    res.json({ message: 'Cuccessfully added!', savedItem });
  } catch (err) {
    res.json({ message: err });
  }
});

quotesRouter.put('/quotes/:id', async (req, res) => {
  try {
    const quoteRequest = await Quote.updateOne({ id: req.params.id }, { quote: req.body.quote });
    res.json({ message: `quote with id ${req.params.id} successfully updated!`, quoteRequest });
  } catch (err) {
    res.json({ message: err });
  }
});

quotesRouter.delete('/quotes/:id', async (req, res) => {
  try {
    const quoteRequest = await Quote.deleteOne({ id: req.params.id });
    res.json({ message: `quote with id ${req.params.id} successfully deleted!`, quoteRequest });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = quotesRouter;
