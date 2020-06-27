const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");

let currentRight = 0;

rightBtn.addEventListener('click', e => {
  e.preventDefault();

  currentRight += 100;

  items.style.right = `${currentRight}px`;

});

leftBtn.addEventListener("click", e => {

});

// Test
// const btn = document.querySelector('.btn');
// const slider__list = document.querySelector('.slider__list');
// const container = document.querySelector('#container')

// btn.addEventListener('click', function () {
//   slider__list.style.right = '100px';
// });

// container.addEventListener('click', function () {
//   console.log('клик по контейнеру');
// })