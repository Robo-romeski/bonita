
$(document).ready(function() {									
	

	$('#sidebar-nav li a').click(function(event){
	var currentPg = $('#sidebar-nav li a.activeBonita').attr("rel");
	console.log(currentPg);
	$('#sidebar-nav li a').removeClass("activeBonita");
		var presentPg = $(this).attr("rel");	
		console.log(presentPg);

		$("#" + currentPg).hide('drop',{direction:'up'},showNewContent).removeClass('focus');
		
		function showNewContent() {
			$('#load').remove();
		
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('slow');
			$('#' + presentPg).fadeIn().addClass('focus');
			$('#footer').hide();
			

		}
		function hideLoader() {
			$('#load').fadeOut('drop');
		}
		$(event.target).addClass("activeBonita");
		return false;
		
	});

});

	