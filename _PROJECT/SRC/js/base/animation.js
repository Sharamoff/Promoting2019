var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       false,
		live:         true,
		callback:     function(box) {},
		scrollContainer: null
	}
);
wow.init();



// анимация cifr на главной
$('#id_agency_cifr1').spincrement({duration: 6000});
$('#id_agency_cifr2').spincrement({duration: 4000});
$('#id_agency_cifr3').spincrement({duration: 4000});