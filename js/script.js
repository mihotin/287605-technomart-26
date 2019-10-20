// Скрипт модального окна 'Товар добавлен в корзину'
var overlay = document.querySelector('.overlay');

if (document.querySelector('.modal-basket')) {
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
    openModalBasket.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalBasket.classList.add('modal-show-basket');
      overlay.classList.add('overlay-show');
      basket.classList.add('basket-full');
      sum += 1;
      numbersProductBasket.textContent = sum;
    });
  }

  closeModalBasket.addEventListener('click', function () {
    modalBasket.classList.remove('modal-show-basket');
    overlay.classList.remove('overlay-show');
  });

  nextSale.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalBasket.classList.remove('modal-show-basket');
    overlay.classList.remove('overlay-show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalBasket.classList.contains('modal-show-basket')) {
        modalBasket.classList.remove('modal-show-basket');
        overlay.classList.remove('overlay-show');
      }
    }
  });

  overlay.addEventListener('click', function () {
    modalBasket.classList.remove('modal-show-basket');
    overlay.classList.remove('overlay-show');
  });
}

// Скрипт добавления товара в закладки
if (document.querySelectorAll('.to-bookmark')) {
  var toBookmarks = document.querySelectorAll('.to-bookmark');
  var bookmark = document.querySelector('.bookmark');
  var numbersProductBookmark = bookmark.querySelector('span');
  var resulte = 0;

  for (var step = 0; step < toBookmarks.length; step++) {
    var toBookmark = toBookmarks[step];
    toBookmark.addEventListener('click', function (evt) {
      evt.preventDefault();
      resulte += 1;
      numbersProductBookmark.textContent = resulte;
    });
  }
}

// Скрипт модального окна 'Формы обратной связи'
if (document.querySelector('.modal-form-back')) {
  var modalFormBack = document.querySelector('.modal-form-back');
  var linkFormBack = document.querySelector('.button-contacts');
  var closeFormBack = modalFormBack.querySelector('.modal-close');
  var form = modalFormBack.querySelector('form');
  var textMail = modalFormBack.querySelector('[name=email-text]');
  var nameUser = modalFormBack.querySelector('[name=user]');
  var email = modalFormBack.querySelector('[name=e-mail]');

  var isStorageSupport = true;
  var storageName = '';
  var storageEmale = '';
  var storageMale = '';

  try {
    storageName = localStorage.getItem('nameUser');
    storageEmail = localStorage.getItem('email');
    storageMale = localStorage.getItem('textMail');
  } catch (err) {
    isStorageSupport = false;
  }

  linkFormBack.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFormBack.classList.add('modal-show');
    overlay.classList.add('overlay-show');
    if (storageName && storageEmail) {
      nameUser.value = storageName;
      email.value = storageEmail;
      textMail.focus();
    } else {
      nameUser.focus();
    }
  });

  form.addEventListener('submit', function (evt) {
    if (!nameUser.value || !email.value || !textMail.value) {
      evt.preventDefault();
      modalFormBack.classList.remove('modal-error');
      modalFormBack.offsetWidth = modalFormBack.offsetWidth;
      modalFormBack.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('nameUser', nameUser.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('textMail', textMail.value);
      }
    }
  });

  closeFormBack.addEventListener('click', function () {
    modalFormBack.classList.remove('modal-show');
    modalFormBack.classList.remove('modal-error');
    overlay.classList.remove('overlay-show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalFormBack.classList.contains('modal-show')) {
        modalFormBack.classList.remove('modal-show');
        modalFormBack.classList.remove('modal-error');
        overlay.classList.remove('overlay-show');
      }
    }
  });

  overlay.addEventListener('click', function () {
    modalFormBack.classList.remove('modal-show');
    modalFormBack.classList.remove('modal-error');
    overlay.classList.remove('overlay-show');
  });
}

// Скрипт модального окна 'Карта'
if (document.querySelector('.modal-map')) {
  var modalMap = document.querySelector('.modal-map');
  var openModalMap = document.querySelector('.map');
  var closeModalMap = modalMap.querySelector('.modal-close');

  openModalMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-show');
    overlay.classList.add('overlay-show');
  });

  closeModalMap.addEventListener('click', function () {
    modalMap.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalMap.classList.contains('modal-show')) {
        overlay.classList.remove('overlay-show');
        modalMap.classList.remove('modal-show')
      }
    }
  });

  overlay.addEventListener('click', function () {
    modalMap.classList.remove('modal-show')
    overlay.classList.remove('overlay-show');
  });
}

// Скрипт кнопок слайдера промо блока

if (document.querySelector('.slider')) {
  var sliderShow = document.querySelector('.slider');
  var clickRight = sliderShow.querySelector('.next');
  var clickLeft = sliderShow.querySelector('.prev');

  clickRight.addEventListener('click', function () {
    document.getElementById('btn-2').checked = true;
  });

  clickLeft.addEventListener('click', function () {
    document.getElementById('btn-1').checked = true;
  });
}