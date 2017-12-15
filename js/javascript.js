// $(document).ready(function( {

// });
// typeit
var instance = new TypeIt('#type-it', {});

//scroll
function scrolling(pos) {
  $('html, body').animate({'scrollTop' : $(pos).offset().top}, "slow");
};

$(document).ready(function() {
	$(".navbar").hide();
	$(function () {
		$(window).scroll(function() {
			if($(this).scrollTop() > 400) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
});