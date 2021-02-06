class Character {

  constructor ( name, health, strength, defense, luck ) {

    this.name = name;
    this.strength = strength;
    this.health = health;
    this.defense = defense;
    this.luck = luck;
  };

  hit ( enemy ) {
    enemy.health -= ( this.strong - enemy.defense) * enemy.luck;
  };

  specialHit ( enemy ) {
    enemy.health -= ( this.strong * 0.5 - enemy.defense ) - enemy.luck;
  };

  defense ( enemy ) {
    this.defense -= ( enemy.strength  -  this.defense ) - this.luck;
  };

};

let restartGame = () => {

  let initialHealth = 200;
  
  player1.health = initialHealth;
  player2.health = initialHealth;

};

let player1 = new Character("beth", 400, 50, 20, 6);
let player2 = new Character("hormigas_en_los_ojos", 350, 40, 30, 5);
let player3 = new Character("jerry", 350, 35, 15, 7);
let player4 = new Character("meeseeks", 450, 40, 30, 5);
let player5 = new Character("morty", 400, 60,25, 7);
let player6 = new Character("rick_pepinillo", 400, 60, 40, 8);
let player7 = new Character("rick", 350, 50, 20, 5);
let player8 = new Character( "summer", 350, 35, 30, 7);

let p1 = '';
let p2 = '';
// let p3 = '';
// let p4 = '';
// let p5 = '';
// let p6 = '';

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
  
  if( teamOne.length < 1 ){ 
    teamOne.push( allPlayers[character] );
  console.log(teamOne)
    document.getElementById( character ).className = "selectedOne" ;
    document.getElementById( character ).onclick = "";

    assignmentTeamOne();
    renderSelectedTeamOne();
          
  }else if( teamTwo.length < 1 ) { 

    teamTwo.push( allPlayers[character] );

    document.getElementById( character ).className = "selectedTwo" ;
    document.getElementById( character ).onclick = "";
    
    assignmentTeamTwo();
    renderSelectedTeamTwo();
  };

  resolveIn(5000).then(delay => {

    switchScreen("screenHome","screenFight");
    
  });
  
  switchTeamsToBattle();
  console.log(p1,p2);
}

// ,p3,p4,p5,p6
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
    // <div><img src="./assets/images/${ p2.name }.jpg"></div>
    // <div><img src="./assets/images/${ p3.name }.jpg"></div>

renderSelectedTeamTwo = () => {
  
  let picTwo = document.getElementById("team2");
    picTwo.innerHTML = `${p2.name}<div><img src="./assets/images/${ p2.name }.jpg"</div>`;
}
  // <div><img src="./assets/images/${ p5.name }.jpg"</div>
  // <div><img src="./assets/images/${ p6.name }.jpg"</div>

switchTeamsToBattle = () => {

  let picTeam1 = document.getElementById("teamBattle1");
    picTeam1.innerHTML = `${p1.name}<div><img src="./assets/images/${ p1.name }.jpg"</div>
    `;
    // <div><img src="./assets/images/${ p2.name }.jpg"</div>
    // <div><img src="./assets/images/${ p3.name }.jpg"</div>
    
  let picTeam2 = document.getElementById("teamBattle2");
    picTeam2.innerHTML = `${p2.name}<div><img src="./assets/images/${ p2.name }.jpg"</div>
    `; 
    // <div><img src="./assets/images/${ p5.name }.jpg"</div>
    // <div><img src="./assets/images/${ p6.name }.jpg"</div>
    
};

let assignmentTeamOne = () =>{
  for( let i = 0; i < teamOne.length; i++ ){
      p1 = teamOne[0];
      // p2 = teamOne[1];
      // p3 = teamOne[2];
  };
};

let assignmentTeamTwo = () =>{
  for( let i = 0; i < teamTwo.length; i++ ){
      p2 = teamTwo[0];
      // p5 = teamTwo[1];
      // p6 = teamTwo[2];
  };
};


let attack = () => {
console.log(p1, p2)
  let turn = Math.floor( Math.random() * 2 );
  let special = Math.floor( Math.random() * 5 );

  if(turn == 0){
      if(special == 3){
          console.log("SPECIAL HIT");
          p1.specialHit( p2 );
          // p2.specialHit( p5 );
          // p3.specialHit( p6 );
      }else{

        p1.hit( p2 );
        // p2.hit( p5 );
        // p3.hit( p6 );
      };
  }else{
      if(special == 3){
          console.log("SPECIAL HIT");
          p2.specialHit( p1 );
          // p5.specialHit( p2 );
          // p6.specialHit( p3 );
      }else{
        p2.hit( p1 );
        // p5.hit( p2 );
        // p6.hit( p3 );

      };
  };

  console.log( p1.name ,':', + p1.health );
  console.log( p2.name ,':', + p2.health );
  
};