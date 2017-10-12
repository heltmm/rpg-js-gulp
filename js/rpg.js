export class Level{
  constructor(level){

    if (level === 1) {
      this.grid = [ "wa","wa","wa","wa","wa","wa","wa","wa","wa","wa","wa","wa",
                    "wa","wa","wa","ld","ld","wp","wa","wa","wa","wa","wa","wa",
                    "wa","ld","ld","ld","rc","bt","wa","wa","wa","wa","wa","wa",
                    "wa","ld","ld","ld","ld","ld","ld","ld","wa","wa","wa","wa",
                    "wa","ld","ld","ld","ld","wa","wa","ld","wa","wa","wa","wa",
                    "wa","ld","wa","wa","wa","wa","wa","ld","wa","wa","pr","ld",
                    "ld","ld","wa","wa","wa","wa","wa","ld","wa","wa","lm","wa",
                    "wa","wa","wa","wa","wa","wa","wa","ld","wa","wa","ld","wa",
                    "wa","wa","wa","wa","wa","wa","wa","ld","ld","ld","ld","wa",
                    "wa","wa","wa","wa","wa","wa","wa","wa","wa","wa","wa","wa"
                  ];
    }
  }

}

export class Character {
  constructor(type, position){
    this.position = position;
    this.alive = true;
    this.last_position;
    this.type = type;
    this.hp = 100;
    this.inventory = [];
    this.weapon = "fist";
    if (type == "Warrior") {
      this.power = 5;
      this.intelligence = 2;
    }
    if (type == "Wizard") {
      this.power = 3;
      this.intelligence = 5;
    }
    if(type == "Pickle Rick"){
      this.power = 15;
      this.inteligence = 15;
    }
  }
  move(direction, level){

    if((direction === "ArrowRight") && (level.grid[this.position + 1] !== "wa") && (level.grid[this.position + 1] !== "rc")){
      this.last_position = this.position;
      this.position += 1;
      return true;
    }
    if((direction === "ArrowLeft") && (level.grid[this.position - 1] !== "wa") && (level.grid[this.position -1] !== "rc")){
      this.last_position = this.position;
      this.position -= 1;
      return true;
    }
    if((direction === "ArrowUp") && (level.grid[this.position - 12] !== "wa") && (level.grid[this.position - 12] !== "rc")){
      this.last_position = this.position;
      this.position -= 12;
      return true;
    }
    if((direction === "ArrowDown") && (level.grid[this.position + 12] !== "wa") && (level.grid[this.position + 12] !== "rc")){
      this.last_position = this.position;
      this.position += 12;
      return true;
    }
    else{
      return false;
    }
  }

  attack(target){
    let attack = this.power * 2;
    if(this.inventory.length){
      attack *= 1.5;
    }
    target.hp -= attack;
    console.log(this.hp);
    console.log(target.hp);
  }

  squareChecker(level){
    if(level.grid[this.position] === "wp"){
      if (this.type === "Wizard"){
        this.inventory.push("Book");
      }
      if (this.type === "Warrior"){
        this.inventory.push("Sword");
      }
      level.grid[this.position] = "ld";
      alert(`${this.inventory[this.inventory.length -1]} added to inventory`);
      return true;
    }
    else if (level.grid[this.position] === "lm"){
      this.inventory.push("Lunch Missile");
      level.grid[this.position] = "ld";
      alert(`${this.inventory[this.inventory.length -1]} added to inventory`);
      return true;
    }
    else if(level.grid[this.position] === "pr"){
      return "battle";
    }
    else{
      return false;
    }
  }
}
