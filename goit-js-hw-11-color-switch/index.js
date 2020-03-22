"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector("body");
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

let timer;

function changeColors() {
  timer = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(colors.length, 0)];
  }, 500);
  btnStart.setAttribute("disabled", true);
}

btnStart.addEventListener('click', changeColors)
btnStop.addEventListener('click', () => {
  clearInterval(timer)
  btnStart.removeAttribute('disabled')
})
