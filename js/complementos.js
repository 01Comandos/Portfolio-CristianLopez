//INICIALIZAR NICESCROLL
$(document).ready(
	function() { 

		//resize menu event
	    $(window).resize(function(){
		    if($(window).width()>630){
		    	$(".menu-abrir").removeAttr("style");
		    	$(".menu-cerrar").removeAttr("style");
		    }
		});

		$("html").niceScroll({cursorwidth:"12px" , zindex:"9999"});

		$("img#corazon").click(function(){
			$(this).attr("src","img/iconosSVG/corazon2.svg");
		});


		$(".menu-abrir").click(function(){
			$(this).css("display","none");
			$(".menu").css("display","block");
			$(".menu-cerrar").css("display","block");
		});

		$(".menu-cerrar").click(function(){
			$(this).css("display","none");
			$(".menu").css("display","none");
			$(".menu-abrir").css("display","block");
		});

		// Slideshow 1
		$("#slider1").responsiveSlides({
	        auto: false,
	        pager: false,
	        nav: true,
	        speed: 500,
	        namespace: "callbacks"
	      });

	      // Slideshow 2
	      $("#slider2").responsiveSlides({
	        auto: false,
	        pager: false,
	        nav: true,
	        speed: 500,
	        namespace: "callbacks"
	      });

	      // Slideshow 3
	      $("#slider3").responsiveSlides({
	        auto: false,
	        pager: false,
	        nav: true,
	        speed: 500,
	        namespace: "callbacks"
	      });

	      // Slideshow 4
	      $("#slider4").responsiveSlides({
	        auto: false,
	        pager: false,
	        nav: true,
	        speed: 500,
	        namespace: "callbacks"
	      });

	    //ir arriba
		$('.ir-arriba').click(function(){
			$('body, html').animate({
				scrollTop: '0px'
			}, 300);
		});
	 
		$(window).scroll(function(){
			if( $(this).scrollTop() > 0 ){
				$('.ir-arriba').slideDown(300);
			} else {
				$('.ir-arriba').slideUp(300);
			}
		});

	}
);




