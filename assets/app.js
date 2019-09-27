$(document).ready(function() {

	$('#sign-in').on('click', function() {
		$(this).attr('disabled', 'disabled');
		window.setTimeout($('sign-in').removeAttr('disabled'), 1000);
		return true;
	});

});