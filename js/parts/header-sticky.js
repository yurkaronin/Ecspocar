window.addEventListener('scroll', function () {
  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});