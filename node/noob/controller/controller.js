const { find } = require('../model/mode');

const getInfo = async (req, res) => {
	const info = await find();
	res.statusCode = 200;
	res.write(JSON.stringify(info));
};

module.exports = { getInfo };
