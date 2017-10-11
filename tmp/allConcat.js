import {Character} from './../js/rpg.js';

$(document).ready(function() {
  let board = "";
  let x = 0;

  for(let row = 0; row < 10; row++) {
    board += "<div class='row'>";
    for(let col = 0; col < 12; col++){
      board += `<div class='col-lg-1'><div id='${x}'><h1>w</h1></div></div>`;
      x += 1;
    }
    board += "</div>";
  }
  $("#game").append(board)
});
