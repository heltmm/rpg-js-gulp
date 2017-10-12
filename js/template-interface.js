$(document).ready(function() {
  // build game board template display
  let board = "";
  let x = 0;
  for(let row = 0; row < 10; row++) {
    board += "<div class='row'>";
    for(let col = 0; col < 12; col++){
      board += `<div class='col-sm-1'><div class='sqr' id='${x}'></div></div>`;
      x += 1;
    }
    board += "</div>";
  }
  $("#game").append(board);
});
// #############################################################################
