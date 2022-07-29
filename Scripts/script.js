const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const title = document.querySelector('.lead__text');
const page = document.querySelector('.page');

burger.addEventListener('click', function(){
  burger.classList.toggle('header__burger_active');
  menu.classList.toggle('header__menu_active');
  title.classList.toggle('lead__text_active');
  page.classList.toggle('page_lock');
});

