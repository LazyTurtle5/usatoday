
// jQuery scroll to make the logo banner stick to the top of the screen on scroll

$(document).ready(function() {

	var logoOffset = $("#logo_banner").offset().top;

	$("#logo_banner").wrap('<div class="logo-placeholder"></div>');
	$(".logo-placeholder").height($("#logo_banner").outerHeight());

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();

		if (scrollPos >= logoOffset) {
			$("#logo_banner").addClass("fixed");
		} else {
			$("#logo_banner").removeClass("fixed");
		}
	});

});