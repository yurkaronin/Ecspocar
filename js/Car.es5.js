"use strict";

var sticky = new Sticky('.fix');
var winWidth = window.innerWidth;

function createSticky() {
  if (winWidth >= 1023 || document.querySelector('body').clientWidth >= 1023) {
    sticky = new Sticky('.car-info__fixer') || false;
  }
}

createSticky();

window.onresize = function () {
  sticky.update();
};

var carSlider = new Swiper('.car-info__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  speed: 700,
  roundLengths: true,
  navigation: {
    nextEl: '.car-info__pagination--next',
    prevEl: '.car-info__pagination--prev'
  }
});
var lightbox = GLightbox();
lightbox.on('open', function (target) {
  console.log("lightbox opened");
});
var lightboxDescription = GLightbox({
  selector: '.glightbox2'
});
var lightboxVideo = GLightbox({
  selector: '.glightbox3'
});
var options = {
  tabGroupParentSelector: '.tabs',
  // Селектор родительского контейнера.
  tabBtnSelector: '.js-tab',
  // Селектор вкладки (таба).
  tabContentSelector: '.js-item',
  // Селектор контентного блока.
  activationClass: 'active',
  // CSS класс, активирующий видимость таба и соответствующей ему контентной области.
  defaultTabToShow: '.js-tab:nth-child(1)' // Псевдокласс или иной селектор, который однозначно укажет на вкладку, которая должна быть активна по умолчанию.

};
var tab = new TabMaker(options);
tab.createTabs();