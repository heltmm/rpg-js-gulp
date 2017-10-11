
import {Character} from './../js/rpg.js'

describe('Character', function() {

  it('create new character', function() {
    var new_char = new Character("Warrior")
    expect(new_char.type).toEqual("Warrior")
  });
  it('create new character', function() {
    var new_char = new Character("Warrior")
    expect(new_char.hp).toEqual(100)
  });
  it('create new character', function() {
    var new_char = new Character("Warrior")
    expect(new_char.power).toEqual(5)
  });
  it('create new character', function() {
    var new_char = new Character("Warrior")
    expect(new_char.intelegence).toEqual(2)
  });
});
