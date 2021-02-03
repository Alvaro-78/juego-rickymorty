
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

let restartGame = () => {

  let initialHealth = 200;
  
  player1.health = initialHealth;
  player2.health = initialHealth;

  p1 = "";
  p2 = "";

};



let attack = () => {
  //Funcion de ataque;
  let turn = Math.floor(Math.random() * 2);
  let special = Math.floor(Math.random() * 5);

  if(turn == 0){
      if(special == 3){
          console.log("ATAQUE ESPECIAL");
          player1.specialHit(player2);
      }else{

          player1.hit(player2);
      }
  }else{
      if(especial == 3){
          console.log("ATAQUE ESPECIAL");
          player2.specialHit(player1);
      }else{
          player2.hit(player1);

      }
  };

  console.log("Vida 1:" + player1.health);
  console.log("Vida 2:" + player2.health);
  
};