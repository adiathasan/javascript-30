const EventEmitter = require('events');

class Alarm extends EventEmitter {
	handleAlarm() {
		setTimeout(() => {
			this.emit('alarm');
		}, 3000);
	}
}

module.exports = { Alarm };
