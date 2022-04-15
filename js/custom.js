"use strict";
let header = document.querySelector('.header');
let headerHeight = header.clientHeight;

// получаем высоту шапки и передаём в глобальную переменную
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

// функция подключения файлов со скриптами 
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

include("./js/parts/header-sticky.js");
include("./js/parts/dropdown-list.js");
