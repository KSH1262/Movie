"use strict";

let a = 0;
const move_img_move = document.getElementById("like_movieBtn");
const move_leftBtn = document.getElementsByClassName("btn_left");
const move_rightBtn = document.getElementsByClassName("btn_right");

function move() {
  move_leftBtn[0].addEventListener('click', () => {
    if (a != 0) {
      a = a + 600;
      move_img_move.style.transform = `translateX(${a}px)`;
    }
  })
  move_rightBtn[0].addEventListener('click', () => {
    if (a != -2400) {
      a = a - 600;
      move_img_move.style.transform = `translateX(${a}px)`;
    }
  })
}

move();