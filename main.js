$(document).ready(function(){
      

    $(".dropdown-phase1").click(function(e){
        $(this).find(".dropdown-menu").slideToggle("fast");
    });

$(".line").click(function(){
    $(".navbar").toggleClass("full");
    $(".header").toggleClass("fullwidth");
    $(".header_region").toggleClass("whiteheader");
    $(".navbar_mobile").toggleClass("mobile_nav");

});

$(".navbar-expand_menu li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children(".visit_card").stop().slideDown(300);
    } else {
      $(this).children(".visit_card").stop().slideUp(300);
    }
  });
$(".fa-plus,.fa-minus").click(function () {
    $(".visit_card_dropdown").toggleClass("items");
});

$(".fa-plus").click(function () {
    // $(".visit_card_box").hide();
    $(this).closest('.visit_card_box').hide();
});
$(".fa-minus").click(function () {
    $(".visit_card_box").show();
});
$('.exploredc_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    // centerMode: true,
    // centerPadding: '60px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: "<button type='button' class='slick-prev test pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next test pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });

  $('.featured_card_wrapper').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
          arrows:false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  });
  
    });
