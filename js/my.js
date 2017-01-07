$(window).load(function() {

	$('.blueberry').blueberry();

});

$(document).ready(function (){

	$('.button-drop-menu').click(function(){

		$('.menu').toggleClass('ontop')	
	});
	$('.btn').click(function() {

		$('.btn').removeClass('btn-click')

		$(this).toggleClass('btn-click')	
	});

});
