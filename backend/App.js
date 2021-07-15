/**
 * An simple Backend service
 * If received a request, search the databse and return results accordingly
 * Ruize Li @ Colby College East Asian Studies
 * July 14, 2021
 */

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3001;

const data = require('./database/sample.json');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send("hello world!"));
app.post('/api/', (req, res) => {
    if (req.method === 'PUT') {
        console.log(req.body);
    }
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))