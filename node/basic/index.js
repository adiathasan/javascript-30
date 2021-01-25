/*

* Title: Uptime monitoring app

* Description: It will check after certain time wheather a certain url is live or not.

* Author: Sumit Saha => post-written (practice) by Adiat Hssan 

* Date: 18/01/2021

*/

// Dependencies
const http = require('http');
const fs = require('fs');
const url = require('url');

// app opject - module scaffolding
const app = {};

// configuration
app.config = {
	PORT: 3000,
};

// create server
app.createServer = () => {
	const server = http.createServer(app.handleReq);

	server.listen(app.config.PORT, () => {
		console.log(`server running at port ${app.config.PORT}`);
	});
};

app.handleReq = (req, res) => {
	const { url: newUrl, headers, method } = req;
	const { pathname, query } = url.parse(newUrl, true);

	req.on('data', (buffer) => {
		console.log(buffer.toString());
	});

	req.on('end', () => {
		res.end();
	});

	if (method === 'POST') {
		switch (pathname) {
			case '/api/signup':
				break;

			default:
				break;
		}
	} else if (method === 'PUT') {
		switch (pathname) {
			case '/api':
				break;

			default:
				break;
		}
	} else {
		switch (pathname) {
			case '/':
				res.write(fs.readFileSync(`${__dirname}/view/index.html`));
				break;
			case '/api':
				res.write(JSON.stringify({ message: 'yo buddy hold on', query }));
				break;

			default:
				break;
		}
	}

	res.end();
};

app.createServer();
