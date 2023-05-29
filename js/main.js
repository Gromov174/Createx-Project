// ==========MIXITUP========== //

$(function() {

  var mixer = mixitup('.directions__cards');

$('.directions__link').on('click', function(){
  $('.directions__link').removeClass('directions__link--active')
  $(this).addClass('directions__link--active')
})

// ==========TEAM-SLIDER========== //

$('.team__slider').slick({
  arrows: false,
  slidesToShow: 4,
  infinite: true,
})

$('.team__slick-prev').on('click', function(e){
  e.preventDefault()
  $('.team__slider').slick('slickPrev')
})

$('.team__slick-next').on('click', function(e){
  e.preventDefault()
  $('.team__slider').slick('slickNext') 
})

// ==========TESTIMONIALS-SLIDER========== //

$('.testimonials__slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  infinite: true,
  appendDots: $('.testimonials__dots'),
})

$('.testimonials__slick-prev').on('click', function(e){
  e.preventDefault()
  $('.testimonials__slider').slick('slickPrev')
})

$('.testimonials__slick-next').on('click', function(e){
  e.preventDefault()
  $('.testimonials__slider').slick('slickNext') 
})

// ==========ACCORDION========== //

$('.program__accordion-link').on('click', function(e){
  e.preventDefault()
  $(this).toggleClass('program__accordion-link--active')
  $(this).children('.program__accordion-text').slideToggle()
})

// $('.program__accordion-link').on('click', function(e){
//   e.preventDefault()
//   if ($(this).hasClass('program__accordion-link--active')) {
//     $(this).removeClass('program__accordion-link--active')
//     $(this).children('.program__accordion-text').slideUp()
//   } else {
//     $('.program__accordion-link').removeClass('program__accordion-link--active')
//     $('.program__accordion-text').slideUp()
//     $(this).addClass('program__accordion-link--active')
//     $(this).children('.program__accordion-text').slideDown()
//   }
// })

// ==========NO-ACTIVE========== //

$('.team__social').on('click', function(e){
  e.preventDefault()
})

$('.directions__cards').on('click', function(e){
  e.preventDefault()
}
)
$('.blog__post').on('click', function(e){
  e.preventDefault()
})

// ==========SMOOTH-MOVE========== //

$(".header__top, .header__buttons-box, .about-us, .logo, .footer__bottom, .site-map, .courses, .social").on("click","a", function (e) {
  e.preventDefault()
  var id  = $(this).attr('href'),
  top = $(id).offset().top
  $('body,html').animate({scrollTop: top}, 1500)
})



$('.burger, .overlay').on('click', function(e){
  e.preventDefault()
  $('.burger').toggleClass('burger--close')
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--active')
})


setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }  
}, 0);


// if (window.scrollTop() > 0) {
//   $('.burger').addClass('burger--follow')
// } else {
//   $('.burger').removeClass('burger--follow')
// }

})


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});