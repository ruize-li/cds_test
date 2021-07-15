/**
 * An simple Backend service
 * If received a request, search the databse and return results accordingly
 * Ruize Li @ Colby College East Asian Studies
 * July 14, 2021
 */

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const url = require('url');
// const fs = require('fs');
const queryString = require('querystring');
const PORT = 9000;

// const cors = require('cors');

// app.use(cors);

const data = require('./database/result.json');

app.use(express.json());        // to support JSON-encoded bodies

/**
 * Handle search requests
 * Example: search?keywords=revolution-chairman-party
 */
app.get('/search', async function(req, res) {
	let keywords = req.query.keywords;			// keywords is a string seperated by '-'
	list_keywords = keywords.split('-');
	let ans = {};
	// iterate through entries
	for (let key of Object.keys(data)) {
		let entry = data[key];
		// search for key word
		for (let word of list_keywords) {
			if (entry["keyword"].indexOf(word) > -1) {
				// if one key word exists, mark and return the item
				ans[key] = data[key];
				break;
			}
		}
	}
	res.json(ans)
});
app.get('/get-data', (req, res) => {
        // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
        // console.log("received req");
        // res.send(data)
        res.json({ msg : "this is the get data feed"})
    
});
// app.post('/post', function(request, response) {
//     // console.log('POST /')
//     // console.dir(request.body)
//     // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//     let keywords = request.body;
//     console.log("post req received");
//     if (!keywords) return res.status(400).json('keywords error!');
    
//     // process the data
//     response.send('got the query! here is the filtered data!')
//   })

// handle requests
// app.use()


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))