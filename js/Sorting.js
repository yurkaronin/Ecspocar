'use strict'
console.log('Sorting.js inited');

/* По задумке сортировка осуществляется не селектом, а поворачивается символ направления сортировки. Тип сортировки
* переключается кликом по другому типу сортировки. Функция определяет тип и направление сортировки. Берется дата-атрибут
* data-sorting, получается его значение, к которому добавляется индикатор "по возрастанию" или "по убыванию". Функция
* возвращает строку, которая состоит из типа сортировки и соответствующего индикатора */

const sortingBtnList = document.querySelectorAll('[data-sorting]');
sortingBtnList.forEach(element => {
    let clickCounter = 0;
    let sortTypeAndDirection;
    element.addEventListener('click', () => {
        clickCounter++;
        if (clickCounter % 2 == 0) {
            sortTypeAndDirection = element.getAttribute('data-sorting') + '-downwards'
        } else {
            sortTypeAndDirection = element.getAttribute('data-sorting') + '-upwards'
        }
        console.log(sortTypeAndDirection);
        return sortTypeAndDirection;
    })
});