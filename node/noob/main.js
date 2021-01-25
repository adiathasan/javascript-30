const fs = require('fs');

const http = require('http');
const { getInfo } = require('./controller/controller');

const server = http.createServer(async (req, res) => {
	if (req.method === 'POST') {
		req.on('data', (chunk) => {
			console.log(chunk.toString().split('+').slice(1).join(' '));
		});
		req.on('end', () => {});
		res.write('Thank you. Love you too.');
	} else {
		switch (req.url) {
			case '/':
				res.statusCode = 200;
				res.write(fs.readFileSync('index.html'));

				break;
			case '/about':
				res.write(fs.readFileSync('about.html'));

				break;
			case '/api':
				res.write(JSON.stringify({ name: 'adiat' }));

				break;
			case '/api/info':
				await getInfo(req, res);

				break;

			default:
				break;
		}
	}

	res.end();
});

server.listen(5000);
