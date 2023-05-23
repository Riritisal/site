"use strict"
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};
if (isMobile.any()) {
   document.body.classList.add('_mobile');
} else {
   document.body.classList.add('_pc');
};
const ikonMenu = document.querySelector('.menu__ikon');
const menyBody = document.querySelector('.menu__body');
if (ikonMenu){
   ikonMenu.addEventListener("click", function(e){
      document.body.classList.toggle('_lock');
      ikonMenu.classList.toggle('_active');
      menyBody.classList.toggle('_active');
   });
}
