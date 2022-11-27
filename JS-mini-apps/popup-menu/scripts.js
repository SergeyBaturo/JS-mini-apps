const popupBtn1 = document.getElementById('popupBtn1');
const popupBtn2 = document.getElementById('popupBtn2')
const popup = document.getElementById('popup');
const popupClose = document.querySelector('.popup-close');
const menu = document.querySelector('.menu');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menu-closer');
const navigationOpen = document.querySelector('.navigation.open')

const closePopup = () => {
  popup.classList.add('closed');
}

popupBtn1.onclick = () => {
  popup.classList.remove('closed');
}

popupBtn2.onclick = () => {
  popup.classList.remove('closed');
}

popupClose.onclick = () => {
  closePopup();
}

window.addEventListener('click', (event) => {
  console.log(event);
  if (event.target == popup) {
    closePopup();
  }
});

menuOpen.onclick = () => {
  menu.classList.remove('closed');
  navigationOpen.classList.remove('open');
}

menuClose.onclick = () => {
  menu.classList.add('closed');
  navigationOpen.classList.add('open');
}