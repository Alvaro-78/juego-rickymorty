let teamOne = [];

let teamTwo = [];




let selectCharacter = ( character ) => {
  
  p1 = character;

  if( teamOne.length < 3 ) {
    teamOne.push( character );
    document.getElementById( character ).className = "selectedOne";
    document.getElementById( character ).onclick = "";
    let messageTeamOne = document.getElementById("messageTeamOne");
    messageTeamOne.innerHTML = `El primer equipo es ${teamOne} <img src="./assets/images/${ p1 }"`;
          
  }else if( teamTwo.length < 3 ) {
    teamTwo.push( character );
    document.getElementById( character ).className = "selectedTwo" ;
    document.getElementById( character ).onclick = "";
    let messageTeamOne = document.getElementById("messageTeamOne");
    messageTeamOne.innerHTML = `El primer equipo es ${teamOne} <img src="../assets/images/${ teamOne[0] }"`;

  };

  let messageTeamTwo = document.getElementById("messageTeamTwo");

  messageTeamTwo.innerHTML = `El segundo equipo es  ${teamTwo} ,`;

  resolveIn(5000).then(delay => {

    switchScreen("screenHome","screenFight");
    
  });
};

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));


let switchScreen = (actualStage,futureStage) => {
  let actualScreen = document.getElementById(actualStage);

  let futureScreen = document.getElementById(futureStage);

  actualScreen.style.display = "none";
  futureScreen.style.display = "block";
};


console.log( teamOne );
console.log( teamTwo );