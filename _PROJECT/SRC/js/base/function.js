
// одностраничная секция главной

$('#id_idx_fullpage').fullpage({
	scrollBar: true, // нужно для wow
	responsiveWidth: 900,
	menu: '#id_idx_nav',
	anchors: ['id_collage', 'id_agency', 'id_services', 'id_solutions', 'id_projects', 'id_clients', 'id_contacts'],
	navigation: true,
	navigationTooltips: ['<', 'АГЕНТСТВО','УСЛУГИ','РЕШЕНИЯ', 'ПРОЕКТЫ', 'КЛИЕНТЫ', 'КОНТАКТЫ'],
	normalScrollElements: '#id_projects',
	sectionSelector:  '.fp_section',
	slideSelector:    '.fp_slide'
});
//document.querySelector('#id_projects').onwheel = e => e.stopPropagation();



// главное левое меню

$('.nav-main__menutoggler, .nav-main__menu a').on('click', function (event) {
	$('.nav-main__menutoggler').toggleClass('active');
	$('.nav-main').toggleClass('active');
	$('.nav-main__menu').toggleClass('active');
	event.stopPropagation();
});



// описание проекта на главной

$('.block-project img').click( function() {
	$('.project__note').fadeOut();
	var note = $(this).attr('rel');
	$('#id_' + note).fadeIn();
});

$('.project__note').click( function() {
	$(this).fadeOut();
});



// включение текста 1 fullpage слайда после инициализации

$('.collage__slogan').addClass('nopacity');
