
class Character {

  constructor ( name, strength, health, defense, luc ) {

    this.name = nombre;
    this.strength = strength;
    this.health = health;
    this.defense = defense;
    this.luc = luc;
  };

  hit ( enemy ) {
    enemy.health -= ( this.strong - enemy.defense) * enemy.luc;
  };

  specialHit ( enemy ) {
    enemy.health -= ( this.strong * 0.5 - enemy.defense ) - enemy.luc;
  };

  defense ( enemy ) {
    this.defense -= ( enemy.strength  -  this.defense ) - this.luc;
  };

};