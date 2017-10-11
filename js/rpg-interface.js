import {Character} from './../js/rpg.js';

$(document).ready(function() {
  let board = "";
  let x = 0;
  for(let row = 0; row < 10; row++) {
    board += "<div class='row'>";
    for(let col = 0; col < 12; col++){
      board += `<div class='col-lg-1'><div class='sqr' id='${x}'></div></div>`;
      x += 1;
    }
    board += "</div>";
  }

  $("#game").append(board);

  $("#create_character").submit(function(event){
    event.preventDefault();
    let type = $("#character_type").val();
    $("#create_character").hide();

    // let level1 = new Level(array1)

  });

  let array1 = [  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["l"],["l"],["l"],["l"],["w"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["l"],["l"],["l"],["l"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["l"],["l"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"]
              ];

  for(let sqr = 0; sqr < 120; sqr++){
    if (array1[sqr][0] === "w"){
      $(`#${sqr}`).addClass("blue");
    }
    if (array1[sqr][0] === "l"){
      $(`#${sqr}`).addClass("green");
    }
  }

});
