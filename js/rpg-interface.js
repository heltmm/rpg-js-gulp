import {Character, Level} from './../js/rpg.js';

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
// #############################################################################

  // sumbit form to start game
  $("#create_character").submit(function(event){
    event.preventDefault();


    let type = $("#character_type").val();
    $("#create_character").hide();

    let player = new Character(type);
    let level1 = new Level(1, 36);

    $("#game").show();


    let current_level = level1;

    for(let sqr = 0; sqr < 120; sqr++){
      if (current_level.grid[sqr][0] === "w"){
        $(`#${sqr}`).addClass("blue");
      }
      if (current_level.grid[sqr][0] === "l"){
        $(`#${sqr}`).addClass("green");
      }
    }


    $(`#${current_level.position}`).html(`<img src='./${player.type}.png'>`);
    $(document).keydown(function(e){
      var last_position = current_level.position
      current_level.move(e.key)

      if(current_level.last_position !== current_level.postion){
        $(`#${current_level.position}`).html(`<img src='./${player.type}.png'>`);
        $(`#${current_level.last_position}`).html("");
      }


    });
  });
});
