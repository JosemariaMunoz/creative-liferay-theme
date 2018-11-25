(function($) {
    // Activate scrollspy to add active class to navbar items on scroll
    // If body height is > than total height
	if (parseInt($(window).height()) > parseInt($('body').height()) ) {
		$('body').scrollspy({
			target: '#mainNav',
			offset: 57
		});
	} else {
        $('#mainNav').addClass('navbar-shrink');
    }

})(jQuery);