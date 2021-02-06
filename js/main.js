class Character {

  constructor ( name, health, strength, defense, luck ) {

    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defense = defense;
    this.luck = luck;
  };

  hit ( enemy ) {
    enemy.health -= ( this.strength - enemy.defense) - this.luck;
  };

  specialHit ( enemy ) {
    enemy.health -= ( this.strength + ( this.strength / 3 ) - enemy.defense ) - enemy.luck;
  };

  defense ( enemy ) {
    this.defense -= ( enemy.strength  -  this.defense ) - this.luck;
  };

};

// let restartGame = () => {

//   let initialHealth = 200;
  
//   player1.health = initialHealth;
//   player2.health = initialHealth;

// };

let player1 = new Character("beth", 400, 50, 20, 6);
let player2 = new Character("hormigas_en_los_ojos", 400, 40, 30, 5);
let player3 = new Character("jerry", 400, 35, 15, 7);
let player4 = new Character("meeseeks", 450, 40, 30, 5);
let player5 = new Character("morty", 400, 60,25, 7);
let player6 = new Character("rick_pepinillo", 400, 60, 40, 8);
let player7 = new Character("rick", 400, 50, 20, 5);
let player8 = new Character( "summer", 400, 35, 30, 7);

let p1 = '';
let p2 = '';

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
  
  if( p1 == "" ){ 

    p1 = allPlayers[character];

    document.getElementById( character ).className = "selectedOne" ;
    document.getElementById( character ).onclick = "";

    renderSelectedTeamOne();

  }else { 

    p2 = allPlayers[character];

    document.getElementById( character ).className = "selectedTwo" ;
    document.getElementById( character ).onclick = "";
    
    renderSelectedTeamTwo();

  };

  resolveIn(5000).then(delay => {

    switchScreen("screenHome","screenFight");
    
  });
  
  switchTeamsToBattle();
  console.log(p1,p2);
}

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));


let switchScreen = (actualStage,futureStage) => {
  let actualScreen = document.getElementById(actualStage);

  let futureScreen = document.getElementById(futureStage);

  actualScreen.style.display = "none";
  futureScreen.style.display = "block";
};


renderSelectedTeamOne = () => {
  
  let picOne = document.getElementById( "team1" );
    picOne.innerHTML = `${p1.name}<div><img src="./assets/images/${ p1.name }.jpg"></div>
    `;
};

renderSelectedTeamTwo = () => {
  
  let picTwo = document.getElementById("team2");
    picTwo.innerHTML = `${p2.name}<div><img src="./assets/images/${ p2.name }.jpg"</div>`;
}

switchTeamsToBattle = () => {

  let picTeam1 = document.getElementById("teamBattle1");
    picTeam1.innerHTML = `${p1.name}<div><img src="./assets/images/${ p1.name }.jpg"</div>
    `;
    
  let picTeam2 = document.getElementById("teamBattle2");
    picTeam2.innerHTML = `${p2.name}<div><img src="./assets/images/${ p2.name }.jpg"</div>
    `; 
    
};

let attack = () => {
console.log(p1.health, p2.health)
  let turn = Math.floor( Math.random() * 2 );
  let special = Math.floor( Math.random() * 5 );

  if(turn == 0){
      if(special == 3){
        console.log("SPECIAAAAAL")
          p1.specialHit( p2 );
          
      }else{
        console.log("ataque")
        p1.hit( p2 );
      };
  }else{
      if(special == 3){
          p2.specialHit( p1 );

      }else{
        p2.hit( p1 );

      };
  };

  console.log( p1.name ,':', + p1.health );
  console.log( p2.name ,':', + p2.health );
  
};