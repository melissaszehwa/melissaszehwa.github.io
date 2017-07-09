
$(document).ready(function(){

	$(".view-more__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToShow: 1
				}
			}
		]
	})

});