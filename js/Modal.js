console.log("Modals.js inited")

function disableScroll() {
    // let pagePosition = window.scrollY;
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.add('disable-scroll');
    // document.body.dataset.position = pagePosition;
    // document.body.style.top = -pagePosition + 'px';
    document.body.style.paddingRight = paddingOffset;
}

function enableScroll() {
    // document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    // window.scroll({ top: pagePosition, left: 0 });
    // document.body.removeAttribute('data-position');
    document.body.style.paddingRight = '0px';
}

const modalsList = document.querySelector('.d-modal');
const modalsCollection = modalsList.querySelectorAll('.d-modal__container');
document.addEventListener('click', function(){
    if (event.target.dataset.modal === "open") {
        event.preventDefault();
        disableScroll();
        modalsList.classList.add('is-open');
        openModal(event.target.dataset.path);
    }
    if (event.target.dataset.modal === 'close') {
        closeModal();
        modalsList.classList.remove('is-open');        
        setTimeout(enableScroll(), 300);
    }
})

function openModal(dataModal) {
    
    for (let modal of modalsCollection) {
        if (dataModal === modal.dataset.target) {
            modal.classList.add('modal-open');
        }
    }
}

function closeModal() {
    for (let modal of modalsCollection) {
        modal.classList.remove('modal-open');
    }
}