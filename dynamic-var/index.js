const picker = document.querySelector('.main > .main__body > input');

picker.addEventListener('change', function handleChange(e) {
	document.documentElement.style.setProperty(`--bg-${this.name}`, this.value);
});

const arr = [
	{ nub: 1 },
	{ nub: 2 },
	{ nub: 3 },
	{ nub: 4 },
	{ nub: 5 },
	{ nub: 6 },
	{ nub: 7 },
];

arr.map((a) => {
	const regex = new RegExp('2', 'ig');
	if (a.nub.toString().match(regex)) {
		console.log(a.nub.toString().replace(regex, '00'));
	}
});
