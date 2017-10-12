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
      if (current_level.grid[sqr] === "ld" || current_level.grid[sqr] === "bt"){
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
      if (current_level.grid[sqr] === "lm"){
        $(`#${sqr}`).addClass("green");
        $(`#${sqr}`).html(`<img src='./lunch_missile.png'>`);
      }
      if(current_level.grid[sqr] === 'pr'){
        $(`#${sqr}`).addClass("darkGreen");
      }
    }

    $(`#${player.position}`).html(`<img src='./${player.type}.png'>`);

    $(document).keydown(function(e){
      let last_position = player.position;
      player.move(e.key, current_level);
      let added = player.squareChecker(current_level);
      if (added != "battle") {
        let listed_inventory = "";
        player.inventory.forEach(function(item){
          listed_inventory += `<li>${item}</li>`;
        });
        $("#inventory").html(`<h1>Inventory:</h1>${listed_inventory}`);
      }
      if(added === "battle"){
        $("#game").hide();
        $("#fight").show();
        $("#fight").html("<h1>Fight!</h1>");
        $("#fight").html(`<h1>Fight!</h1><div class='row'><div class='col-sm-6'><img src='./${player.type}.png'></div><div class='col-sm-6'><img src='./pickle_rick.gif'></div></div>`);
      }

      if (player.last_position !== player.position){
        $(`#${player.position}`).html(`<img src='./${player.type}.png'>`);
        $(`#${player.last_position}`).html("");
      }
    });
  });
});
