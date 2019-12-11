
// одностраничные секции

//index
$('#id_idx_fullpage').fullpage({
	scrollBar: true, // нужно для wow
	responsiveWidth: 900,
	menu: '#id_idx_nav',
	navigation: true,
	navigationTooltips: ['<', 'АГЕНТСТВО','УСЛУГИ', 'ОТРАСЛЕВЫЕ РЕШЕНИЯ', 'ПРОЕКТЫ', 'КЛИЕНТЫ', 'КОНТАКТЫ'],
	sectionSelector:  '.fp_section',
	slideSelector:    '.fp_slide'
});

//services
$('#id_srv_fullpage').fullpage({
	scrollBar: true, // нужно для wow
	responsiveWidth: 900,
	menu: '#id_srv_nav',
	navigation: true,
	navigationTooltips: ['РАЗРАБОТКА САЙТОВ', 'РЕЗУЛЬТАТ', 'РЕШАЕМЫЕ ЗАДАЧИ', 'ПРЕИМУЩЕСТВА/НЕДОСТАТКИ', 'ФАКТЫ О НАС', 'ЭТАПЫ РАЗРАБОТКИ', 'ВОПРОСЫ И ОТВЕТЫ', 'ОТРАСЛЕВЫЕ РЕШЕНИЯ', 'КЛИЕНТЫ', 'КОНТАКТЫ'],
	normalScrollElements: '.sc_stages, .sc_faq ',
	sectionSelector:  '.fp_section',
	slideSelector:    '.fp_slide'
});



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
