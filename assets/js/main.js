(function($) {
  "use strict"
  jQuery(document).ready(function() {

      //info bar current date 
      const today = new Date(); 
      var CurrentDay = today.getDate(); 
      var CurrentMonth = today.toLocaleString('default', {month: 'long'}); 
      var CurrentYear = today.getFullYear(); 
      var DateIcon = '<i class="far fa-calendar-alt margin-right-8"></i>'; 
      if(CurrentDay === 1){
        var CurrentDate = DateIcon + CurrentDay + "st" + " " + CurrentMonth + " " + CurrentYear; 
        $(".current-date").html(CurrentDate); 
      } else if(CurrentDay === 2 ) {
        var CurrentDate = DateIcon + CurrentDay + "nd" + " " + CurrentMonth + " " + CurrentYear; 
        $(".current-date").html(CurrentDate); 
      } else if (CurrentDate === 3) {
        var CurrentDate = DateIcon + CurrentDay + "rd" + " " + CurrentMonth + " " + CurrentYear; 
        $(".current-date").html(CurrentDate); 
      } else {
        var CurrentDate = DateIcon + CurrentDay + "th" + " " + CurrentMonth + " " + CurrentYear; 
        $(".current-date").html(CurrentDate); 
      }

      //infobar ticker 
      $(".infobar-ticker").slick({
          arrows : false,
          autoplay : true,
          fade: true,
      });

      // mobile-menu
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991.99"
      });

      //Video Popup
      $('.blog-popup-video').magnificPopup({
          type: "iframe",
          iframe: {
              markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '</div>',
            
              patterns: {
                youtube: {
                  index: 'youtube.com/',
                  id: 'v=',
                  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                  index: 'vimeo.com/',
                  id: '/',
                  src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                  index: '//maps.google.',
                  src: '%id%&output=embed'
                }
              },
              srcAction: 'iframe_src',
            },
          mainClass: 'mfp-with-zoom',
          zoom: {
              enabled: true,
              duration: 300,
              easing: 'ease-in-out',
              opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
          }
      });

      //Counter Up
        $(".number-counter").counterUp({
          delay: 10, 
          time: 2000,
        }); 

      //Testimonial Slider
      var client_slider = $(".testimonial-section .client-slider");
      client_slider.slick({
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
      }); 

      var education_slider = $(".education-section .education-slider"); 
      education_slider.slick({
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
      });

      var donar_slider = $(".donar-area .donar-slider"); 
      donar_slider.slick({
        auplay: true, 
        arrows: false,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
            }
          }, 
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });

      // Nice Select 
      $('select').niceSelect();

      //Help Img Slider
      $(".help-img-slider").slick({
        arrows : false,
        dots: true,
        autplay: true,
        fade : true,
      });

      $(".accordion").accordion(); 

      //Volunteer Toggle
      $("span.plus-icon").each(function(){
        $(this).on('click', function(){
          $(this).next('.designation').addClass('active-designation');
          $(this).siblings('.social').addClass('social-active'); 
          $(this).fadeOut('fast');
        });
      })

      $("span.close").each(function(){
        $(this).on('click', function(){
          $(this).parent().removeClass('active-designation');
          $(this).parent().siblings('.social').removeClass('social-active');
          $(this).parent().siblings('span.plus-icon').fadeIn(); 
        });
      });
      
      //About Donate Slider 
      $(".about-donate-slider .slider").slick({
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
      });


      $(".country_selector").countrySelect();

      //Brands Carousel 
      $(".brands-carousel").slick({
        autoplay : true,
        slidesToShow : 3,
        arrows : false,
        responsive : [
          {
            breakpoint : 575,
            settings : {
            slidesToShow : 2,
            }
          } 
        ]
      });

      $(".post-slider").slick({
        autoplay : true, 
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
      }); 

      //Filter Isotop 
      var $grid = $('.grid').isotope({
        // options
      });

      // filter items on button click
      $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use element for option
          columnWidth: 1
        }
      });

      //Isotop Active Button 
      $(".filter-button-group button").each(function(){
        $(this).on('click', function(){
          $(this).parent().find('button.active').removeClass("active"); 
          $(this).addClass('active');
        });
      });

      //Volunteer-slider 
      var team_slider = $(".volunteer-slider .client-slider"); 
      team_slider.slick({
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow : 1,
            }
          }
        ]
      });

      //Radion Active Button
      $(".mission-donate-form label").each(function(){
        $(this).on('click', function(){
          $(this).siblings('.active').removeClass('active'); 
          $(this).addClass('active');
        });
      });

      //Family Content Slider 
      $(".family-story .family-slider").slick({
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
      });


      //Blog-thumbnail Slider 
      $(".blog-thumbnail-slider").slick({
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        slidesToShow: 1,

      });

      $(".blog-details-slider").slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
      }); 

      //Go Top Button
      $(window).on('scroll', function(){
        var ScrollBar = $(this).scrollTop(); 
        var Height = $(window).height(); 
        var FadeInHeight = Height / 3; 
        if(ScrollBar >= FadeInHeight){
          $(".go-top-btn").fadeIn('1000', 'linear');
        } else {
          $(".go-top-btn").fadeOut('1000', 'linear');
        }
      }); 

      // go top btn
      $(".go-top-btn").on('click', function(){
        $("body,html").animate({
          scrollTop : 0,
        }); 
      });


      //Hero Slider 
      $(".hero-slider").slick({
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        slidesToShow: 1,
        fade: true,
      });

      //Campaign Event Single Slider 
      $(".campaign-event .slider-left").slick({
        autoplay: true, 
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        slidesToShow: 1,
      });

      //Donation Pricing Single Slider 
      $(".donation-pricing .pricing-slider").slick({
        autoplay: true, 
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        slidesToShow: 1,
      }); 

      // Countdown
      $('.countdown').downCount({
          date: '06/25/2021 12:00:00',
          offset: +6
        }, function () {
            alert('Countdown done!');
        });

      // cp slider
      $(".cp-slider").slick({
        autoplay: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow : 2,
            }
          }, 
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1,
            }
          }
          
        ]
      });

      //Project List Gallery
      $('.p-gallery-img').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });

  });

  jQuery(window).on('load', function() {

      // WOW JS
      new WOW().init();

      // Preloader
      var preLoder = $("#preloader");
      preLoder.fadeOut(0);

      //ProgressBar
    $(".animated-progress-bar").ProgressBar();

  });
})(jQuery);






