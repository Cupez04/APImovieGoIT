$(document).ready(function(){

	$('.botton_to_top').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.botton_to_top').slideDown(300);
		} else {
			$('.botton_to_top').slideUp(300);
		}
	});
});