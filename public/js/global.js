
$(window).scroll(function () {
	if (jQuery(this).scrollTop() > 0) {
		jQuery('header').addClass('scrolled');
	} else {
		jQuery('header').removeClass('scrolled');
	}
	$('.flexslider_2').flexslider({
		animation: "fade",
		animationSpeed: 500,
		smoothHeight: true,
		animationLoop: true,
		touch: true,
		directionNav: false
	});
});