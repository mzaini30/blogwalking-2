jQuery(function($){
	$('.tampil-blog').css({
		'bottom': function(){
			return $('.credit').height();
		}
	});
});