const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	switch (req.url) {
		case '/':
			res.write(fs.readFileSync('index.html'));

			break;
		case '/about':
			res.write(fs.readFileSync('about.html'));

			break;
		case '/api':
			res.write(JSON.stringify({ name: 'adiat' }));

			break;

		default:
			break;
	}
	res.end();
});

server.listen(5000, () => {
	console.log(`listing for port 5000`);
});
