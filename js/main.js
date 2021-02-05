class Character {

  constructor ( name, strength, health, defense, luc ) {

    this.name = name;
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

};

let player1 = new Character("beth", 50, 400, 20, 6);
let player2 = new Character("hormigas_en_los_ojos", 40, 350, 30, 5);
let player3 = new Character("jerry", 35, 350, 15, 7);
let player4 = new Character("meeseeks", 40, 450, 30, 5);
let player5 = new Character("morty", 60, 400, 25, 7);
let player6 = new Character("rick_pepinillo", 60, 400, 40, 8);
let player7 = new Character("rick", 50, 350, 20, 5);
let player8 = new Character( "summer", 35, 350, 30, 7);

let teamOne = [];

let teamTwo = [];

let allPlayers = {
  "beth": player1,
  "hormigas_en_los_ojos": player2,
  "jerry": player3,
  "meeseeks": player4,
  "morty": player5,
  "rick_pepinillo": player6,
  "rick": player7,
  "summer": player8,
};


let selectCharacter = ( character ) => {
  
  if( teamOne.length < 3 ){ 
    
    teamOne.push( character )

    document.getElementById( character ).className = "selectedOne";
    document.getElementById( character ).onclick = "";
    
    let picOne = document.getElementById( "team1" );
    picOne.innerHTML = `<div><img src="./assets/images/${ teamOne[0] }.jpg"></div>
                        <div><img src="./assets/images/${ teamOne[1] }.jpg"></div>
                        <div><img src="./assets/images/${ teamOne[2] }.jpg"></div>
                        `;

          
  }else if( teamTwo.length <3 ) { 

    teamTwo.push( character );

    document.getElementById( character ).className = "selectedTwo" ;
    document.getElementById( character ).onclick = "";
    
    let picTwo = document.getElementById("team2");
    picTwo.innerHTML = `<div><img src="./assets/images/${ teamTwo[0] }.jpg"</div>
                        <div><img src="./assets/images/${ teamTwo[1] }.jpg"</div>
                        <div><img src="./assets/images/${ teamTwo[2] }.jpg"</div>
                        `;

  };

  resolveIn(5000).then(delay => {

    switchScreen("screenHome","screenFight");
    
  });
  
  switchTeamsToBattle();

};


const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));


let switchScreen = (actualStage,futureStage) => {
  let actualScreen = document.getElementById(actualStage);

  let futureScreen = document.getElementById(futureStage);

  actualScreen.style.display = "none";
  futureScreen.style.display = "block";
};


switchTeamsToBattle = () => {

  let picTeam1 = document.getElementById("teamBattle1");
  picTeam1.innerHTML = `<div><img src="./assets/images/${ teamOne[0] }.jpg"</div>
                        <div><img src="./assets/images/${ teamOne[1] }.jpg"</div>
                        <div><img src="./assets/images/${ teamOne[2] }.jpg"</div>`;
  
  let picTeam2 = document.getElementById("teamBattle2");
  picTeam2.innerHTML = `<div><img src="./assets/images/${ teamTwo[0] }.jpg"</div>
                        <div><img src="./assets/images/${ teamTwo[1] }.jpg"</div>
                        <div><img src="./assets/images/${ teamTwo[2] }.jpg"</div>`; 

};

let attack = ( allPlayers ) => {
  //Funcion de ataque;
  let turn = Math.floor(Math.random() * 2);
  let special = Math.floor(Math.random() * 5);

  if(turn == 0){
      if(special == 3){
          console.log("ATAQUE ESPECIAL");
          teamOne.specialHit(teamTwo);
      }else{

        teamOne.hit(teamTwo);
      };
  }else{
      if(special == 3){
          console.log("ATAQUE ESPECIAL");
          teamTwo[0].specialHit(teamOne);
      }else{
        teamTwo.hit(teamOne);

      };
  };

  console.log("Vida 1:" + teamOne[0].health);
  console.log("Vida 2:" + teamTwo[0].health);
  
};