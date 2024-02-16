
const express = require('express');
const cors = require('cors');
const app = express();
const {add} = require('./arithmetica');
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/add/:n/:m', (req, res) => {
    const n = parseInt(req.params.n);
    const m = parseInt(req.params.m);
    const result = add(n, m);
    res.json({ result });
});

app.listen(port);
