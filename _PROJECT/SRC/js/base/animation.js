var wow = new WOW(
	{
		boxClass:        'wow',
		animateClass:    'animated',
		offset:           0,
		mobile:           false,
		live:             true,
		callback:         function(box) {},
		scrollContainer:  null
	}
);
wow.init();



// анимация cifr
$('.spin-numb').spincrement({duration: 6000});
