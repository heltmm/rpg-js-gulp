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
  //health bar
  let status = "<div class='row'><div id='healthBar' class='col-sm-6'><h1>Health Bar</h1><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-danger active' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:100%'>100%</div></div></div>";
  //inventory
  status += "<div id='inventory' class='col-sm-6'><h1>Inventory:</h1><p>empty</p></div></div>";

  $("#game").append(board);
  $("#status").append(status);
});
// #############################################################################
