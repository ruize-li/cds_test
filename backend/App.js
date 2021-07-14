/**
 * An simple Backend service
 * If received a request, search the databse and return results accordingly
 * Ruize Li @ Colby College East Asian Studies
 * July 14, 2021
 */

const express = require('express');
const app = express();
const PORT = 3001;

const data = require('./database/sample.json');

app.get('/', (req, res) => res.send("hello world!"));
app.get('/api/', (req, res) => res.send(data));


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))