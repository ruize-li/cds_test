/**
 * An simple Backend service
 * If received a request, search the databse and return results accordingly
 * Ruize Li @ Colby College East Asian Studies
 * July 14, 2021
 */

const express = require('express');
const app = express();
const url = require('url');
const queryString = require('querystring');
const PORT = 5000;

const cors = require('cors');
// app.use(cors);
// app.use(express.json());        // to support JSON-encoded bodies
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });


const data = require('./database/result.json');



/**
 * Handle search requests
 * Example: search?keywords=revolution-chairman-party
 */
app.get('/search', function(req, res) {
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
	console.log('search code ran! keywords are' + keywords);
	res.json(ans);
});
app.get('/get-data', (req, res) => {
        res.json({ msg : "this is the get data feed"})
    
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))