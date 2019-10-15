   var modalBasket = document.querySelector('.modal-basket');
   var openModalBasket = document.querySelector('.buy');
   var closeModalBasket = popup.querySelector('.modal-close');

   openModalBasket.addEventListener("click", function (evt) {
     evt.preventDefault();
     modalBasket.classList.add('modal-basket-show');
   });

   closeModalBasket.addEventListener('click', function () {
     modalBasket.classList.remove('modal-basket-show');
   });

   document.addEventListener('keydown', function (evt) {
     if (evt.keyCode === 27) {
       modalBasket.classList.remove('modal-basket-show');
     }
   });
