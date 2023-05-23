$(function() {

  var mixer = mixitup('.directions__cards');

$('.directions__link').on('click', function(){
  $('.directions__link').removeClass('directions__link--active')
  $(this).addClass('directions__link--active')
})

})


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});