
import {Character, Level} from './../js/rpg.js'

describe('Character', () => {

  it('create new character', () => {
    let char = new Character("Warrior", 22);
    expect(char.type).toEqual("Warrior")
  });

  it('create new character', () => {
    let char = new Character("Warrior", 22);
    expect(char.hp).toEqual(100)
  });

  it('create new character', () => {
    let char = new Character("Warrior", 22);
    expect(char.power).toEqual(5)
  });

  it('create new character', () => {
    let char = new Character("Warrior", 22);
    expect(char.intelligence).toEqual(2)
  });

  it('check if able to move into water', () => {
    let level = new Level(1);
    let char = new Character("Warrior", 72);
    expect(char.move("ArrowUp", level)).toEqual(false)
  });

  it('check if able to move into rock', () => {
    let level = new Level(1);
    let char = new Character("Wizard", 40);
    expect(char.move("ArrowUp", level)).toEqual(false)

  });

  it('check if the Character does not add weapon to inventory', () => {
    let level = new Level(1);
    let char = new Character("Wizard", 16);
    expect(char.addToInvetory(level)).toEqual(false)
  });

  it('check if the Character adds weapon to inventory', () => {
    let level = new Level(1);
    let char = new Character("Wizard", 16);
    char.move("ArrowRight", level)
    expect(char.addToInvetory(level)).toEqual(true)
  });

  it('check if the Character adds weapon to inventory', () => {
    let level = new Level(1);
    let char = new Character("Wizard", 16);
    char.move("ArrowRight", level)
    char.addToInvetory(level)
    expect(char.inventory).toEqual(["Book"])
  });

  it('check if the Character adds weapon to inventory', () => {
    let level = new Level(1);
    let char = new Character("Warrior", 16);
    char.move("ArrowRight", level)
    char.addToInvetory(level)
    expect(char.inventory).toEqual(["Sword"])
  });

});

describe('Level', () => {

  it('create level with input one, creates the level 1 grid',
   () => {
     let level = new Level(1)
     expect(level.grid[0]).toEqual("wa")

  });
});
