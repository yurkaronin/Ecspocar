console.log('Panels.js inited');

const switcherElement = document.querySelector('#switcher');
const switchingPanel = document.querySelector('.js-switching-part');
const brandsPanel = document.querySelector('#brands');
const acc = new Accordion('.js-accordion');

acc.createAccordion();
document.querySelector('#accordion-open').click();

switcherElement.addEventListener('click', () => {
    switchingPanel.classList.toggle('js-invisible-part');
    if (switchingPanel.classList.contains('js-invisible-part')) {
        switcherElement.innerHTML = "Все бренды";
    } else {
        switcherElement.innerHTML = "Свернуть";
    }
    brandsPanel.style.maxHeight = brandsPanel.scrollHeight + "px";
});