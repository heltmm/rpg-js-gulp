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
    $("#status").show();

    let current_level = level1;

    //draw board
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
        $("#fight").html(`<h1>Fight!</h1><div class='row'><div class='col-sm-6'><img src='./${player.type}.png'><h2>${player.type}</h2><button id='attack'>fight</button></div><div class='col-sm-6'><img src='./pickle_rick.gif'><h2>Pickle Rick</h2></div></div><h2>VS</h2>`);
      }

      if (player.last_position !== player.position){
        $(`#${player.position}`).html(`<img src='./${player.type}.png'>`);
        $(`#${player.last_position}`).html("");
      }

      var pickle_rick = new Character("Pickle Rick");

      $("#attack").click(function(){
        player.attack(pickle_rick);
        pickle_rick.attack(player);

        $("#status").html(`<div class='row'><div id='healthBar' class='col-sm-6'><h1>Health Bar</h1><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-danger active' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:${player.hp}%'>${player.hp}%</div></div></div><div id='healthBar' class='col-sm-6'><h1>Health Bar</h1><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-danger active' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:${pickle_rick.hp}%'>${pickle_rick.hp}%</div></div></div></div>`);
      });
    });



  });
});

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
