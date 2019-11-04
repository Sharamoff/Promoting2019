/* main */
$(document).ready(function () {


// одностраничная секция главной

$('#id_idx_fullpage').fullpage({
	scrollBar: true, // нужно для wow
	responsiveWidth: 815,
	menu: '#id_idx_nav',
	anchors: ['id_collage', 'id_agency', 'id_services', 'id_solutions', 'id_projects', 'id_clients', 'id_contacts'],
	navigation: true,
	navigationTooltips: ['<', 'АГЕНТСТВО','УСЛУГИ','РЕШЕНИЯ', 'ПРОЕКТЫ', 'КЛИЕНТЫ', 'КОНТАКТЫ']
});




// главное левое меню

$('.nav-main__menutoggler, .nav-main__menu a').on('click', function (event) {
	$('.nav-main__menutoggler').toggleClass('active');
	$('.nav-main').toggleClass('active');
	$('.nav-main__menu').toggleClass('active');
	event.stopPropagation();
});
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

});