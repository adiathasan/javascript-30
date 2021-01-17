const fs = require('fs');

const http = require('http');

const EventEmitter = require('events');

// const { Alarm } = require('./shit');

// const alarm = new Alarm();

// alarm.on('alarm', () => {
// });

// alarm.handleAlarm();

// const stream = fs.createReadStream(`${__dirname}/b.txt`, 'utf8');

// stream.on('data', (chunk) => {
// 	console.log(' chunk ');
// });

const server = http.createServer((req, res) => {
	if (req.method === 'POST') {
		req.on('data', (chunk) => {
			console.log(chunk.toString().split('+').slice(1).join(' '));
		});
		req.on('end', () => {});
		res.write('Thank you. Love you too.');
	} else {
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
	}

	res.end();
});

const emitter = new EventEmitter();

emitter.on('timeout', (letter) => {
	console.log(letter);
});

server.listen(5000);

setTimeout(() => {
	emitter.emit('timeout', 'I love You');
}, 6000);
