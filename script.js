$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
});




function slider(){
   let slides = document.querySelectorAll('#slides .slide');
   let currentSlide = 0;
   let slideInterval = setInterval(nextSlide, 3500);
   function nextSlide(){
      slides [currentSlide].className = 'slide';
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'slide showing';
   }
}
slider();