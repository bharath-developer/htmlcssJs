'use strict'
const switcher = document.querySelector(".btn");

switcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  var className = document.body.className;
  if (className == 'light-theme') {
    this.textContent = 'Dark';
  } else {
    this.textContent = 'Light';
  }
  console.log('current class name:' + className);
});
