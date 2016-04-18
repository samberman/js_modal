$(document).ready(function(){
	
	$("#button").click(function(){
		$("#form").show();
		$("#modal").show();
	});
		

// when you click the button, the modal opens.

	$("#modal").click(function(){
		$("#modal").hide();
		$("#form").hide();
	});


// when you click anywhere on the page, the lightbox closes.

});