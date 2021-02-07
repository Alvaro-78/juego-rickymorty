class Character {

  constructor ( name, health, strength, defense ) {

    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defense = defense;
  };

  hit ( enemy ) {
    this.health -= this.strength + enemy.defense;
  };

  specialHit ( enemy ) {
    this.health -= ( this.strength + ( this.strength / 3 ) - enemy.defense );
  };

};

let player1 = new Character("beth", 400, 30, 20);
let player2 = new Character("hormigas_en_los_ojos", 400, 20, 30);
let player3 = new Character("jerry", 400, 35, 15);
let player4 = new Character("meeseeks", 400, 20, 30);
let player5 = new Character("morty", 400, 60,25);
let player6 = new Character("rick_pepinillo", 400, 30, 40);
let player7 = new Character("rick", 400, 20, 20);
let player8 = new Character( "summer", 400, 35, 30);

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

    renderSelectedPlayerOne();

  }else if( p2 == "" ){ 
    
    p2 = allPlayers[character];

    if( allPlayers[character] = 1) {

      document.getElementById( character ).className = "selectedTwo" ;
      document.getElementById( character ).onclick = "";
      
    };

    renderSelectedPlayerTwo();

  };

  resolveIn(3000).then(delay => {

    switchScreenBattleCamp("screenHome","screenFight");
    
  });
  
  switchTeamsToBattle();
}

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));


let switchScreenBattleCamp = (actualStage,futureStage) => {
  let actualScreen = document.getElementById(actualStage);

  let futureScreen = document.getElementById(futureStage);

  actualScreen.style.display = "none";
  futureScreen.style.display = "block";
};

switchTeamsToBattle = () => {

  let picTeam1 = document.getElementById("teamBattle1");
    picTeam1.innerHTML = `${p1.name}<div><img src="./assets/images/${ p1.name }.jpg"</div>`;
    
  let picTeam2 = document.getElementById("teamBattle2");
    picTeam2.innerHTML = `${p2.name}<div><img src="./assets/images/${ p2.name }.jpg"</div>`; 
};

renderSelectedPlayerOne = () => {
  
  let picOne = document.getElementById( "team1" );
    picOne.innerHTML = `${p1.name}<div><img src="./assets/images/${ p1.name }.jpg"></div>`;
};

renderSelectedPlayerTwo = () => {
  
  let picTwo = document.getElementById("team2");
    picTwo.innerHTML = `${p2.name}<div><img src="./assets/images/${ p2.name }.jpg"</div>`;
};


let attack = () => {

  let turn = Math.floor( Math.random() * 2 );
  let special = Math.floor( Math.random() * 5 );

  if(turn == 0){

    if(special = 2){
      p1.specialHit( p2 );

    }else{

      p1.hit( p2 );

    };
    
  }else{

    if(special = 2){
        p2.specialHit( p1 );

    }else{

      p2.hit( p1 );

      
    };
    
  };
  
  battleMessage();

  console.log( p1.name ,':', + Math.floor(p1.health) );
  console.log( p2.name ,':', + Math.floor(p2.health) );

};


let switchScreenHome = (actualStage,futureStage) => {
  
  
  let actualScreen = document.getElementById(actualStage);
  
  let futureScreen = document.getElementById(futureStage);
  
  actualScreen.style.display = "block";
  futureScreen.style.display = "none";
  
  window.location.reload()
  
};

battleMessage = () => {

  if ( p1.health <= 0 ) {
    let messageDeath = document.getElementById("teamBattle1");
    messageDeath.innerHTML = `Estas muerto`;

    let messageWin = document.getElementById("teamBattle2");
    messageWin.innerHTML = `Eres el Amo`

  }else if( p2.health <= 0){

    let messageDeath = document.getElementById("teamBattle2");
    messageDeath.innerHTML = `Estas muerto`;
    
    let messageWin = document.getElementById("teamBattle1");
    messageWin.innerHTML = `Eres el Amo`;

    resolveIn(2000).then(delay => {
  
      switchScreenHome("screenHome","screenFight");
      
    });
  };
};
