$( document ).ready(function() {
  $('.trigger').on('click', function() {
      $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur-it');
      return false;
  });
  $('.head').on('click', function (){
      $('.modal-wrapper').removeClass('open');
  })
});
//Открытие меню hamburger
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', ()=> {
  header.classList.toggle('open')
})