
export class Character {
  constructor(type){
    this.type = type;
    this.hp = 100;
    if (type == "Warrior") {
      this.power = 5;
      this.intelegence = 2;
    }if (type == "Wizard") {
      this.power = 3;
      this.intelegence = 5;
    }
  }
}
