console.log('Car.js inited');

let sticky = new Sticky('.fix');
let winWidth = window.innerWidth;

function createSticky() {
    if (winWidth >= 1023 || document.querySelector('body').clientWidth >= 1023) {
        sticky = new Sticky('.car-info__fixer') || false;
    }
}
createSticky();

window.onresize = function() {
    sticky.update();
}

const carSlider = new Swiper('.car-info__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    speed: 700,
    roundLengths: true,
    navigation: {
        nextEl: '.car-info__pagination--next',
        prevEl: '.car-info__pagination--prev',
    },
});

let lightbox = GLightbox();
lightbox.on('open', (target) => {
    console.log("lightbox opened");
});
let lightboxDescription = GLightbox({
    selector: '.glightbox2',
});
let lightboxVideo = GLightbox({
    selector: '.glightbox3'
});

let options = {
    tabGroupParentSelector: '.tabs', // Селектор родительского контейнера.
    tabBtnSelector: '.js-tab', // Селектор вкладки (таба).
    tabContentSelector: '.js-item', // Селектор контентного блока.
    activationClass: 'active', // CSS класс, активирующий видимость таба и соответствующей ему контентной области.
    defaultTabToShow: '.js-tab:nth-child(1)' // Псевдокласс или иной селектор, который однозначно укажет на вкладку, которая должна быть активна по умолчанию.
};

const tab = new TabMaker(options);
tab.createTabs();