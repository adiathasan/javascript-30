const moderator = {};

moderator.find = () => {
	return new Promise((resolve, _) => {
		resolve({ name: 'adiat', id: '1134', home: 'khulna' });
	});
};

module.exports = moderator;
