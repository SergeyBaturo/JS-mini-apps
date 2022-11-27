const menuOpener = document.querySelector('#menu-opener');
const menu = document.querySelector('.menu');
const search = document.querySelector('.search');
const searchButton = document.querySelector('.search-button')

menuOpener.addEventListener('click',() => {
  menu.classList.toggle('opened');
  menuOpener.classList.toggle('opened');
});

search.addEventListener('focusin', () => {
  searchButton.classList.add('focused');
});

search.addEventListener('focusout', () => {
  searchButton.classList.remove('focused');
})