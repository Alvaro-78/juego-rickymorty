
class Character {

  constructor ( name, strong, health, defense, luc ) {
    this.name = nombre;
    this.strong = strong;
    this.health = health;
    this.defense = defense;
    this.luc = luc;
  };

  hit ( enemy ) {
    enemy.health -= ( this.strong - this.defense - enemy.luc );
  };

  specialHit ( enemy ) {
    enemy.health -= ( this.strong + 5 - this.defense . enemy.luc );
  }
}