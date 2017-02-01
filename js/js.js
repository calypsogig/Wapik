$('#btn_main_nav').click(function(){
	$('.main_nav_ul').toggle();
});

$(window).resize(function(){
	var width = $(window).width();
	if (width > 768 && $('.main_nav_ul').is(':hidden')) {
		$('.main_nav_ul').removeAttr('style');
	} 
});