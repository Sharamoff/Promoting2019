
// одностраничная секция главной

$('#id_idx_fullpage').fullpage({
	menu: '#id_idx_nav',
	anchors: ['id_collage', 'id_agency', 'id_services', 'id_solutions', 'id_projects', 'id_clients', 'id_contacts'],
	navigation: true,
	navigationTooltips: ['<', 'АГЕНТСТВО','УСЛУГИ','РЕШЕНИЯ', 'ПРОЕКТЫ', 'КЛИЕНТЫ', 'КОНТАКТЫ']
});



// главное левое меню

const toggler = document.querySelector('.nav-main__menutoggler');
const nav  = document.querySelector('.nav-main');
const menu = document.querySelector('.nav-main__menu');
const body = document.body;
toggler.addEventListener('click', () => {
	toggler.classList.toggle('active');
	nav.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('body--noscroll');
});
