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

$('.program__accordion-link').on('click', function(e){
  e.preventDefault()
  $(this).toggleClass('program__accordion-link--active')
  $(this).children('.program__accordion-text').slideToggle()
})

// ==========NO-ACTIVE========== //

$('.header__top').on('click', function(e){
  e.preventDefault()
})

$('.button').on('click', function(e){
  e.preventDefault()
})

$('.team__social').on('click', function(e){
  e.preventDefault()
})

$('.directions__cards').on('click', function(e){
  e.preventDefault()
})

// ==========NO-ACTIVE========== //

})


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});