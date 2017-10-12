import {Character, Level} from './../js/rpg.js';


$(document).ready(function() {
  // sumbit form to start game
  $("#create_character").submit(function(event){
    event.preventDefault();


    let type = $("#character_type").val();
    $("#create_character").hide();

    var player = new Character(type, 72);
    var level1 = new Level(1);

    $("#game").show();

    let current_level = level1;

    for(let sqr = 0; sqr < 120; sqr++){
      if (current_level.grid[sqr] === "wa"){
        $(`#${sqr}`).addClass("blue");
      }
      if (current_level.grid[sqr] === "ld"){
        $(`#${sqr}`).addClass("green");
      }
      if (current_level.grid[sqr] === "rc"){
        $(`#${sqr}`).addClass("brown");
      }
      if (current_level.grid[sqr] === "wp"){
        $(`#${sqr}`).addClass("green");
        if(player.type === "Warrior"){
          $(`#${sqr}`).html(`<img src='./sword.png'>`);
        }
        if(player.type === "Wizard"){
          $(`#${sqr}`).html(`<img src='./book.png'>`);
        }
      }
    }

    $(`#${player.position}`).html(`<img src='./${player.type}.png'>`);

    $(document).keydown(function(e){
      let last_position = player.position;
      player.move(e.key, current_level);
      player.addToInvetory(current_level);

      if(player.last_position !== player.position){
        $(`#${player.position}`).html(`<img src='./${player.type}.png'>`);
        $(`#${player.last_position}`).html("");
      }
    });
  });
});
