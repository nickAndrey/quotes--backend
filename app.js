const express = require('express');
const app = express();
const cors = require('cors');
const quotesRouter = require('./routes/router');
const mangoose = require('mongoose');
require('dotenv/config');

mangoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to mongodb')
);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', quotesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}, accept API via: http://localhost:${PORT}/api`);
});
