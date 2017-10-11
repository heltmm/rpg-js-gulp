
import {Character} from './../js/rpg.js'

describe('Character', function() {

  it('create new character', function() {
    let new_char = new Character("Warrior")
    debugger
    expect(new_char.type).toEqual("Warrior")
  });
  it('create new character', function() {
    let new_char = new Character("Warrior")
    expect(new_char.hp).toEqual(100)
  });
  it('create new character', function() {
    let new_char = new Character("Warrior")
    expect(new_char.power).toEqual(5)
  });
  it('create new character', function() {
    let new_char = new Character("Warrior")
    expect(new_char.intelligence).toEqual(2)
  });
});
