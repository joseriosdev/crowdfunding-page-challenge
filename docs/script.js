const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burger.classList.toggle('ex');
  document.querySelector('body').classList.toggle('overflow-hidden');
});