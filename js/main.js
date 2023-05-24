$(function() {

  var mixer = mixitup('.directions__cards');

$('.directions__link').on('click', function(){
  $('.directions__link').removeClass('directions__link--active')
  $(this).addClass('directions__link--active')
})

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

$('.testimonials__slider').slick({
  arrows: false,
  slidesToShow: 1,
  infinite: true,
})

$('.testimonials__slick-prev').on('click', function(e){
  e.preventDefault()
  $('.testimonials__slider').slick('slickPrev')
})

$('.testimonials__slick-next').on('click', function(e){
  e.preventDefault()
  $('.testimonials__slider').slick('slickNext') 
})

$('.button').on('click', function(e){
  e.preventDefault()
})

})


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});