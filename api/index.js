const express = require('express');
const products = require('./products.json');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
res.json(products)
});

app.listen(4000);