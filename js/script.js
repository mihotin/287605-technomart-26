// Скрипт модального окна 'Товар добавлен в корзину'
var modalBasket = document.querySelector('.modal-basket');
var closeModalBasket = modalBasket.querySelector('.modal-close');
var nextSale = modalBasket.querySelector('.white-btn');
var makeOrderBtn = modalBasket.querySelector('.make-order-btn');
var buyButtons = document.querySelectorAll('.buy');
var basket = document.querySelector('.basket');
var numbersProductBasket = basket.querySelector('span');
var sum = 0;

for (var i = 0; i < buyButtons.length; i++) {
  var openModalBasket = buyButtons[i];
  openModalBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.add('modal-basket-show');
    basket.classList.add('basket-full');
    makeOrderBtn.focus();
    sum += 1;
    numbersProductBasket.textContent = sum;
  });
}

closeModalBasket.addEventListener('click', function () {
  modalBasket.classList.remove('modal-basket-show');
});

nextSale.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove('modal-basket-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modalBasket.classList.remove('modal-basket-show');
  }
});

// Скрипт добавления товара в закладки

var toBookmarks = document.querySelectorAll('.to-bookmark');
var bookmark = document.querySelector('.bookmark');
var numbersProductBookmark = bookmark.querySelector('span');
var resulte = 0;

for (var step = 0; step < toBookmarks.length; step++) {
  var toBookmark = toBookmarks[step];
  toBookmark.addEventListener("click", function (evt) {
    evt.preventDefault();
    resulte += 1;
    numbersProductBookmark.textContent = resulte;
  });
}


/**

var sliderRadioLeft = document.getElementById('btn-1');
var sliderRadioRight = document.getElementById('btn-2');
var sliderBtnLeft = document.querySelector('.prev');
var sliderBtnRight = document.querySelector('.next');

sliderBtnLeft.addEventListener('click', function () {
  sliderRadioLeft.setAttribute('checked', 'checked');
  sliderRadioRight.removeAttribute('checked');
});

sliderBtnRight.addEventListener('click', function () {
  sliderRadioRight.setAttribute('checked', 'checked');
  sliderRadioLeft.removeAttribute('checked');
}); */
