import {Character} from './../js/rpg.js';

$(document).ready(function() {
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


  // sumbit form
  $("#create_character").submit(function(event){
    event.preventDefault();
    let type = $("#character_type").val();
    $("#create_character").hide();


    $("#game").show();
  });
  let array1 = [  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["l"],["l"],["l"],["l"],["w"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["l"],["l"],["l"],["l"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["l"],["w"],["w"],["w"],["w"],["w"],["l"],["l"],["w"],["w"],["w"],
                  ["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["l"],["w"],
                  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                  ["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
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
  // on click
  var last_id = 42;
  $(".sqr").click(function(e){
    let current_id = parseInt($(e.currentTarget).attr('id'));


    console.log(current_id);
    console.log(last_id -1);
    console.log(last_id - (current_id-1));
    if((array1[`${current_id}`][0] === "l") && ((last_id-1) === current_id)){
      $(e.currentTarget).html("<img src='./warrior.png'>");
    }
    last_id = current_id;
  });

});
