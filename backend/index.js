const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./db');

const port = 2000;

app.use(cors());

app.get('/tickets', (req, res) => {
    res.send(JSON.stringify(db.ticketsList));
});

app.get('/cart', (req, res) => {
    res.send(JSON.stringify(db.cartList));
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});