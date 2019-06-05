$(document).ready(function() {
	
	// $("li").on("click", function () { 
	// 	$("li").html("Oh hi there")
	// })

	//hide images and text upon scroll
	$(window).scroll(function() {

	    if ($(this).scrollTop()>200)
	     {
	        $('.belowNav').fadeOut(750);
	     }
	    else
	     {
	      $('.belowNav').fadeIn(750);
	     }
	 });

	//change spectrum position to fixed on scroll
	$(window).scroll(function() {

	    if ($(this).scrollTop()>380)
	     {
	     	$("#spectrum2").removeClass("spec2");
	        $("#spectrum2").addClass("fixedSpectrum");

	     }
	    else
	     {
	     	$("#spectrum2").removeClass("fixedSpectrum");
	        $("#spectrum2").addClass("spec2");
      
	     }
	 });

	$(window).scroll(function() {

	    if ($(this).scrollTop()>500)
	     {
	        $("#Pro").addClass("current");
	     }
	    else
	     {
	        $("#Pro").removeClass("current");
	      
	     }
	 });

	$("#Pro").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".professional").offset().top},
	        'slow');
	});

	 $("#Home").click( function() {
	   $('html,body').animate({
	   		scrollTop:0}, 'slow');
	 });
})