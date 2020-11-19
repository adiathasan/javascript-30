const picker = document.querySelector('input');

picker.addEventListener('change', function handleChange() {
	console.log(this.name);
	document.documentElement.style.setProperty(`--bg-${this.name}`, this.value);
});
