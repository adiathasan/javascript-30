window.onload = () => {
	lax.init();
	lax.addDriver('scrollY', function () {
		return window.scrollY;
	});

	// Add animation bindings to elements
	lax.addElements('.selector', {
		scrollY: {
			translateX: [
				['elInY', 'elCenterY', 'elOutY'],
				[0, 'screenWidth/2', 'screenWidth'],
			],
		},
	});
};
