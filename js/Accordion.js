console.log('Accordion.js inited');

class Accordion {

    constructor(selector) {
        this.selector = selector;
    }

    createAccordion(selector) {
        const accordionList = document.querySelectorAll(this.selector);
        for (let element of accordionList) {
            element.addEventListener("click", function(){
                event.preventDefault();
                this.classList.toggle('active');
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            })
        }
    }
}