export class Level{
  constructor(array){
    this.level = array;
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
export class Game{
  constructor(type, array){
    this.character = new Character(type);
    this.level = new Level(array);
  }
}


// let array1 = [  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
//                 ["w"],["w"],["w"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
//                 ["l"],["l"],["l"],["l"],["w"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
//                 ["l"],["l"],["l"],["l"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],
//                 ["w"],["l"],["w"],["w"],["w"],["w"],["w"],["l"],["l"],["w"],["w"],["w"],
//                 ["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
//                 ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["l"],["w"],
//                 ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
//                 ["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
//                 ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"]
//             ];
// const level1 = new Level(array)
// level2 = new Level(array)
