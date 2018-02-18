jQuery(function($){
	$('.tampil-blog').height($(window).height() - $('.credit').height());

	var intQuoteCount = blog.length; // The number of quotes in your library
	var dtNow = new Date();
	var intTZOffset = dtNow.getTimezoneOffset() * 60000; // automatically adjust for user timezone
	var intNow = dtNow.getTime() - intTZOffset;
	var intDay = Math.floor(intNow / 86400000); // The number of 'local' days since Jan 1, 1970
	var intQuoteToDisplay = intDay % intQuoteCount;

	// $('.tampil-blog').attr('src', blog[intQuoteToDisplay]);
});