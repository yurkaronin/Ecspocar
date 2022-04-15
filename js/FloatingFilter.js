console.log('FloatingFilter.js inited');

const modal = document.querySelector('.modal');
const filterButton = document.querySelector('[data-open]');
const modalCloseButton = modal.querySelector('[data-close]');

filterButton.addEventListener('click', () => modal.classList.add('show'));
modalCloseButton.addEventListener('click', () => modal.classList.remove('show'));