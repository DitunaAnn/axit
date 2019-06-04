

(function($) {
	$(function(e) {
		$('.tabs-toggles').on('click','button:not(.active)', function() { 
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs-block').find('div.tabs-item').removeClass('active').eq($(this).index()).delay().addClass('active');
		});		
	});
})(jQuery);
	
	// selector (css selector
	// default: [hred^="#anchor"]
	// Селектор на ссылку для клика
	
	// speed (number)
	// default: 500
	// Скорость анимации прокрутки

	// beforeScroll (callback)
	// Функция, которая будет выполнена перед анимацией

	// afterScroll (callback)
	// Функция, которая будет выполнена после анимации

	// )





function toAnchor(param) {
	var options = {
		selector: '[href^="#anchor"]',
		speed: 500,
		beforeScroll: function() {},
		afterScroll: function() {},
		responsive: [],
		offset: 0
	};

	for (let key in param) {
		options[key] = param[key];
	}

	var defaults = {};

	for (let key in options) {

		defaults[key] = options[key];
	}

	if ( options.responsive.length ) {

		$(document).ready(reOpt);
		$(window).resize(reOpt);
		function reOpt (){	

			for (let i = 0; i < options.responsive.length; i++) {
				if (window.matchMedia(`(max-width: ${options.responsive[i].breakpoint}px)`).matches ) {

					for (let key in options.responsive[i].settings) {
					options[key] = options.responsive[i].settings[key];
					}
				}else {
					for (let key in options) {
						options[key] = defaults[key];
					}

				}
			}
		}
	}

	$(options.selector).click(function() {
		event.preventDefault();

		var id     = $(this).attr('href'),
			docTop = $(id).offset().top;


		options.beforeScroll();

		$('html, body').animate({
			scrollTop: docTop - options.offset
		}, options.speed);

		setTimeout(options.afterScroll, options.speed);
	});

};


toAnchor({
	responsive: [
		{
			breakpoint: 767,
			settings: {
				offset: $('.header').height()
			}
		}
	]
});


	// selector (css selector)
	// default: .nav-toggle
	// Селектор кнопки переключателя для клика

	// toggleClass (string)
	// default: nav-toggle_active
	// Переключатель класса для кнопки
	
	// selectorNav (css selector)
	// default: .nav
	// Селектор блока навигации

	// toggleClassNav (string)
	// default: nav_active
	// Переключатель класса для блока навигации

	// selectorLink (css selector)
	// default: [href^="#anchor"]
	// Селектор ссылки для клика

	// blockScroll (boolean)
	// default: false
	// Блокирует прокрутку страницы при открытом меню





function toggleNav(param) {
	var options = {
		selector: '.nav-toggle',
		toggleClass: 'nav-toggle_active',
		selectorNav: '.nav',
		toggleClassNav: 'nav_active',
		selectorLink: '[href^="#anchor"]',
		blockScroll: false,
		responsive: [],
		activeState: false
	};

	for (let key in param) {
		options[key] = param[key];
	}

	var defaults = {};

	for ( let key in options) {
		defaults[key] = options[key];
	}

	if ( options.responsive.length ) {
		$(document).ready(reOpt);
		$(window).resize(reOpt);

		function reOpt () {
			for (let i = 0; i < options.responsive.length; i++) {
				if ( window.matchMedia(`(max-width: ${options.responsive[i].breakpoint}px)`).matches ) {
				
					for (let key in options.responsive[i].settings ) {
						options[key] = options.responsive[i].settings[key];
					}
				} else {

					for (let key in options) {
						options[key] = defaults[key];
					}
				}
		}
		
		}
	}

	$(`${options.selector}, ${options.selectorLink}`).click(function() {
		options.activeState = !options.activeState;

		if ( options.toggleClass ) {
			$(options.selector).toggleClass(options.toggleClass );
		}

		if ( options.toggleClassNav ) {
			$(options.selectorNav).toggleClass( options.toggleClassNav );
		}

		if ( options.blockScroll ) {
			if ( options.activeState ) {
				$('body').css('overflow', 'hidden');
			} else {
				$('body').removeAttr('style');
			}
		}
	});
}

toggleNav({
	responsive: [
		{
			breakpoint: 767,
			settings: {
				blockScroll: true
			}
		}
	]
});

$('.awesome-grid').slick({
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	prevArrow: $('.awesome-prev'),
	nextArrow: $('.awesome-next'),
	responsive: [
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 1
			}
		},
		{
			breakpoint: 1130,
			settings:{
				slidesToShow: 2
			}
		},
		]
});

$('.review-grid').slick({
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	prevArrow: $('.review-prev'),
	nextArrow: $('.review-next'),
	responsive: [
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 1
			}
		},
		{
			breakpoint: 1130,
			settings:{
				slidesToShow: 2
			}
		},
		]
});

$('.price-grid').slick({
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	prevArrow: $('.price-prev'),
	nextArrow: $('.price-next'),
	responsive: [
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 1
			}
		},
		{
			breakpoint: 1130,
			settings:{
				slidesToShow: 2
			}
		},
		]
});
