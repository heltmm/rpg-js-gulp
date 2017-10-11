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
    let array1 = [  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["w"],["w"],["w"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["l"],["l"],["l"],["l"],["w"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["l"],["l"],["l"],["l"],["l"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],
                    ["w"],["l"],["w"],["w"],["w"],["w"],["w"],["l"],["l"],["l"],["w"],["w"],
                    ["l"],["l"],["w"],["w"],["w"],["w"],["w"],["l"],["w"],["l"],["l"],["w"],
                    ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["l"],["w"],["w"],["l"],["w"],
                    ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["l"],["w"],["w"],["l"],["l"],
                    ["l"],["l"],["w"],["w"],["w"],["w"],["w"],["l"],["w"],["w"],["w"],["l"],
                    ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["l"],["w"],["w"],["w"],["l"]
                ];

    let type = $("#character_type").val();
    $("#create_character").hide();

    let player = new Character(type);
    let level1 = new Level(array1);

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
    // on click
    // var last_id = player.position;
    // $(`#${last_id}`).html(`<img src='./${player.type}.png'>`);
    // move player by click
    // $(".sqr").click(function(e){
    //   let current_id = parseInt($(e.currentTarget).attr('id'));
    //
    //   if((current_level.grid[`${current_id}`][0] === "l") && (((last_id-1) === current_id) || ((last_id+1) === current_id) || ((last_id-12) === current_id)|| ((last_id+12) === current_id))){
    //     $(e.currentTarget).html(`<img src='./${player.type}.png'>`);
    //     $(`#${last_id}`).html("");
    //     last_id = current_id;
    //   }
    // });

    var current_id = player.position;
    $(`#${current_id}`).html(`<img src='./${player.type}.png'>`);
    $(document).keydown(function(e){
      if((e.key === "ArrowRight") &&(current_level.grid[`${current_id + 1}`][0] === "l")){
        $(`#${current_id + 1}`).html(`<img src='./${player.type}.png'>`);
        $(`#${current_id}`).html("");
        current_id += 1;
      }
      if((e.key === "ArrowLeft") &&(current_level.grid[`${current_id - 1}`][0] === "l")){
        $(`#${current_id - 1}`).html(`<img src='./${player.type}.png'>`);
        $(`#${current_id}`).html("");
        current_id -= 1;
      }
      if((e.key === "ArrowDown") &&(current_level.grid[`${current_id + 12}`][0] === "l")){
        $(`#${current_id + 12}`).html(`<img src='./${player.type}.png'>`);
        $(`#${current_id}`).html("");
        current_id += 12;
      }
      if((e.key === "ArrowUp") &&(current_level.grid[`${current_id - 12}`][0] === "l")){
        $(`#${current_id - 12}`).html(`<img src='./${player.type}.png'>`);
        $(`#${current_id}`).html("");
        current_id -= 12;
      }
    });
  });
});
