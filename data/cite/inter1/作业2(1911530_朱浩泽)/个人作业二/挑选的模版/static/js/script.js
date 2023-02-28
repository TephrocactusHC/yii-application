(function ($) {

    "use strict";

    $(document).ready(function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();



        // dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });


        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });

        }
        
        
        
        // SHOW - HIDE - BOX SEARCH ON MENU
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
		// HIDE BOX SEARCH WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}


        
        //Side Content Toggle
        if($('.menu-sidebar').length){
            //Show Form
            $('.menu-sidebar').on('click', function(e) {
                e.preventDefault();
                $('body').addClass('side-content-visible');
            });
            //Hide Form
            $('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
                e.preventDefault();
                $('body').removeClass('side-content-visible');
            });
            //Dropdown Menu
            $('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
                $(this).next('ul').slideToggle(500);
            });
        }
        
        
        /*Video Magnific Popup */
        if ($.fn.magnificPopup) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }

        /* Fact Counter + Text Count */
        if ($('.success-box').length) {
            $('.success-box').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }

 
        //apartment carousel
        if ($('.apartment-carousel').length) {
            $('.apartment-carousel').owlCarousel({
                loop:true,
                items: 3,
                slideBy: 3,
                margin: 30,
                nav: true,
                dots: false,
                active: true,
                smartSpeed: 500,
                autoplay: false,
                responsive:{
                    0:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    1200:{
                        items:3
                    }
                }
            });    		
        }
        
        
        // Scroll to a Specific Div
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }

        
        // Scroll Down to Specific Area
        $(".scroll").on('click', function (e) {
            e.preventDefault();
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html").animate({
                scrollTop: position
            }, 1000);
        });
        

        // main-header background color chnage whene click on navbar-toggle
        $(".navbar-toggle").on('click', function () {
            $('.main-header').toggleClass('bg-black');
        });
        
        
        // jQuery Nice Select
        $('select').niceSelect();

        
         /* initialize the contact page map on the "map" div with a given center and zoom*/
        if($('#map').length !== 0){
            var map = L.map('map', {
                center: [40.929483, -74.376729],
                zoom: 13,
                zoomControl: false,
                scrollWheelZoom: false,
            });

            let myFilter = [
                'blur:0px',
                'brightness:95%',
                'contrast:130%',
                'grayscale:100%',
                'hue:290deg',
                'opacity:100%',
                'invert:95%',
                'saturate:300%',
                'sepia:10%',
            ];

            let myTileLayer = L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
                attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
                filter: myFilter,
            }).addTo(map);
            
             var point = [40.929482, -74.376728];
             var marker = L.marker(point).addTo(map);
        }
        
        

        // Elements Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


    });

    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();


        // main-header background color remove whene window resize
        if ($(window).innerWidth() >= mobileWidth) {
            $('.main-header').removeClass('bg-black');
        }

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
        
    });



})(window.jQuery);
