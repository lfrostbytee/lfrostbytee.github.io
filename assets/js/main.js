var swiper = new Swiper(".slide-container", {
	loop: true,

	// If we need pagination
	pagination: {
	el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
  });



// Change Nav to have black bottom border when scrolled	
function scrollNav() {
	const nav = document.getElementById('nav')
	if(this.scrollY >= 80) nav.classList.add('scroll-nav'); else nav.classList.remove('scroll-nav');
}

window.addEventListener('scroll', scrollNav);

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			alignment: 'center'
		});

	// Scrolly
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height() - 5; }
		});

	// Nav.

		// Title Bar.
		if ($('#logo2').length) {
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + ' ' 
					+ $('#logo2').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);
		} else {
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);
		}


		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);