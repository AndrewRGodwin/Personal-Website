$(document).ready(function() {
	
	// $("li").on("click", function () { 
	// 	$("li").html("Oh hi there")
	// })

	//hide images and text upon scroll
	$(window).scroll(function() {

	    if ($(this).scrollTop()>200)
	     {
	        $('.belowNav').fadeOut(750);
	        $('.spec2').addClass("spec2Show");
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

	//indicator for professional button
	$(window).scroll(function() {

	    if ($(this).scrollTop() > 500 && $(this).scrollTop() < 1250)
	     {
	        $("#Pro").addClass("current");
	        $(".slider").addClass("sliderArrived");
	        $("#School").removeClass("current");
	        $(".slider").removeClass("sliderSchool");
	        $(".slider").removeClass("sliderProjects")
	        $(".slider").removeClass("sliderContact");
	        $("#Proj").removeClass("current");
	        $("#Con").removeClass("current");
	     }
	    //Academics Section of Page
	    else if ($(this).scrollTop() > 1250 && $(this).scrollTop() <= 1980)
	    {
	    	$("#School").addClass("current");
	    	$("#Pro").removeClass("current");
	    	$(".slider").addClass("sliderSchool");
	    	$(".slider").removeClass("sliderProjects")
	    	$(".slider").removeClass("sliderContact");
	    	$("#Proj").removeClass("current");
	    	$("#Con").removeClass("current");
	    }
	    //Projects Section of Page 
	    else if ($(this).scrollTop() >= 1981 && $(this).scrollTop() <= 2710)
	    {
	    	$("#School").removeClass("current");
	    	$("#Proj").addClass("current");
	    	$("#Pro").removeClass("current");
	    	$(".slider").removeClass("sliderSchool");
	    	$(".slider").removeClass("sliderContact");
	    	$(".slider").addClass("sliderProjects");
	    	$("#Con").removeClass("current");

	    }

	    else if ($(this).scrollTop() >= 2711 && $(this).scrollTop() <3500)
	    {
	    	$("#Con").addClass("current");
	    	$("#Pro").removeClass("current");
	    	$("#Proj").removeClass("current");
	    	$("#School").removeClass("current");
	        $(".slider").removeClass("sliderSchool");
	        $(".slider").removeClass("sliderProjects");
	    	$(".slider").addClass("sliderContact");


	    }
	    else
	     {
	        $("#Pro").removeClass("current");
	        $("#School").removeClass("current");
	        $(".slider").removeClass("sliderArrived");
	      
	     }
	 });

	$("#Pro").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".professional").offset().top - 165},
	        'slow');
	});

	$("#School").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".academics").offset().top - 165},
	        'slow');
	});

	$("#Proj").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".projects").offset().top - 165},
	        'slow');
	});

	$("#Con").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".contact").offset().top - 165},
	        'slow');
	});

	 $("#Home").click( function() {
	   $('html,body').animate({
	   		scrollTop:0}, 'slow');
	 });
})