
$(document).ready(function() {
						   
	//var hash = window.location.hash.substr(1);
	//var href = $('#sidebar-nav li a').each(function(){
	//	var href = $(this).attr('href');
	//	if(hash==href.substr(0,href.length-5)){
	//		var toLoad = hash+'.html #main';
	//		$('#main').load(toLoad)
	//	}											
	

	$('#sidebar-nav li a').click(function(event){
	var currentPg = $('#sidebar-nav li a.activeBonita').attr("rel");
	console.log(currentPg);
	$('#sidebar-nav li a').removeClass("activeBonita");
		var presentPg = $(this).attr("rel");	
		console.log(presentPg);
		

		//var toLoad = $(this).attr('href')+' #main';	
		$("#" + currentPg).hide('slow',showNewContent);
		
		//$('#main').show('fold',hideLoader());
		//window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		/*function loadContent() {
			$('#main').load(toLoad,'',showNewContent())
		}*/
		function showNewContent() {
			$('#load').remove();
		
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('slow');
			$('#' + presentPg).show('drop', {direction:'up'},hideLoader());
			

		}
		function hideLoader() {
			$('#load').fadeOut('drop');
		}
		$(event.target).addClass("activeBonita");
		return false;
		
	});

});

	