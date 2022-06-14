$(document).ready(function() {
	navOpenClose();

	career_form();
    home_carousel();
    home_multi_carousel();
	home_multi_carousel_2();

	// $('.fancybox').fancybox({
	// 	padding: '0 0 0 0'
	// })

});

function home_multi_carousel() {
    var owlprod = $('.owl-carousel-home-multi');
    owlprod.owlCarousel({
        items: 2,
        loop: true,
		nav: true,
		dots: true,
        navText:['',''],
        margin: 20,
        autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
        smartSpeed:850,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            800:{
                items:2,
                nav:true,
                loop:false
            },
            1024:{
                items:2,
                nav:true,
                loop:false
            },
            1366:{
                items:2,
                nav:true,
                loop:false
            }
        }

    });
}

function home_multi_carousel_2() {
    var owlprod = $('.owl-carousel-home-multi2');
    owlprod.owlCarousel({
        items: 3,
        loop: true,
		nav: true,
		dots: true,
        navText:['',''],
        margin: 20,
        autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
        smartSpeed:850,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            800:{
                items:2,
                nav:true,
                loop:false
            },
            1024:{
                items:3,
                nav:true,
                loop:false
            },
            1366:{
                items:3,
                nav:true,
                loop:false
            }
        }

    });
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something
	if(scroll > 200) {
		$("header").addClass("active");
	} else {
        $("header").removeClass("active");
	}
});

function home_carousel() {
	var owl = $('.owl-carousel-home');
	if(owl){
		owl.owlCarousel({
			nav: true,
			navText:['',''],
			items: 1,
			loop: true,
			margin: 0,
			autoplay: true,
			// autoplayTimeout: 3000,
			// autoplayHoverPause: true,
			smartSpeed:1000

		});
    }

}

function navOpenClose() {
	$(".mobil-button").on("click", function() {

		var opControl = $("nav.right-menu").hasClass("menu-close");

		if (opControl){
			$("nav.right-menu").show('slide', {direction : 'right'}, 300, function(){
				$("nav.right-menu").removeClass("menu-close");
				$("nav.right-menu").addClass("menu-open");
			});
		}
		else{
			$("nav.right-menu").hide('slide', {direction : 'right'}, 300, function(){
				$("nav.right-menu").removeClass("menu-open");
				$("nav.right-menu").addClass("menu-close");
			});
		}

		event.stopPropagation();

	});
}



function career_form() {

	$.validator.setDefaults({
		submitHandler: function() {

			var form 	= $("#career-form"); //document.querySelector('form');

			var form_id	= form.attr("id");
			var action	= form.attr("action");
			var method	= form.attr("method");

			var formData = new FormData($('#' + form_id)[0]);

			$.ajax({
				type		: method,
				url			: action,
				data		: formData,
				async		: false,
				cache		: false,
				contentType	: false,
				processData	: false,
				beforeSend	: function(){},
				error		: function(){
					console.log("ajax error");
				},
				complete	: function(){
				},
				success		: function(cevap) {
					if(cevap == "true"){
						$(".send-message").html("Mesajınız başarıyla gönderildi.");
					} else {
						$(".send-message").html(cevap);
					}
				}
			});
		}
	});

	$("#career-form").validate({
		rules: {
			name_surname: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: 2
			},
			phone_number: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			name_surname: {
				required: "Bu alanın doldurulması zorunludur.",
				minlength: "Adınız en az 2 karakterden oluşmalıdır."
			},
			email: {
				required: "Bu alanın doldurulması zorunludur.",
				email: "Geşerli bir e-posta adresi yazınız."
			},
			phone_number: {
				required: "Bu alanın doldurulması zorunludur.",
				email: "Size ulaşabileceğimiz bir telefon numarası yazınız. En az 10 haneli olmalıdır."
			}
		}
	});
}






