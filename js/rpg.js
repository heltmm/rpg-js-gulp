export class Level{
  constructor(level, position){
    this.position = position;
    this.last_position;
    if (level === 1) {
      this.grid = [  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
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
    }
  }
  move(direction){
    if((direction === "ArrowRight") && ((this.grid[this.position + 1][0]) === "l")){
      this.last_position = this.position
      this.position += 1;
    }
    if((direction === "ArrowLeft") && ((this.grid[this.position - 1][0]) === "l")){
      this.last_position = this.position
      this.position -= 1;
    }
    if((direction === "ArrowUp") && ((this.grid[this.position - 12][0]) === "l")){
      this.last_position = this.position
      this.position -= 12;
    }
    if((direction === "ArrowDown") && ((this.grid[this.position + 12][0]) === "l")){
      this.last_position = this.position
      this.position += 12;
    }
  }
}

export class Character {
  constructor(type){
    this.type = type;
    this.hp = 100;
    this.inventery = [];
    this.weapon = "fist";
    if (type == "Warrior") {
      this.power = 5;
      this.intelligence = 2;
    }
    if (type == "Wizard") {
      this.power = 3;
      this.intelligence = 5;
    }
  }
}
