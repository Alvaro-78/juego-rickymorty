let teamOne = [];

let teamTwo = [];




let selectCharacter = ( character ) => {
  
  if( teamOne.length < 3 ) {
    teamOne.push( character );
    document.getElementById( character ).className = "selectedOne";
    document.getElementById( character ).onclick = "";
    let messageTeamOne = document.getElementById("messageTeamOne");
    messageTeamOne.innerHTML = `El primer equipo es ${teamOne} <img src="./assets/images/${ teamOne[0] }"`;
          
  }else if( teamTwo.length < 3 ) {
    teamTwo.push( character );
    document.getElementById( character ).className = "selectedTwo" ;
    document.getElementById( character ).onclick = "";
    let messageTeamOne = document.getElementById("messageTeamOne");
    messageTeamOne.innerHTML = `El primer equipo es ${teamOne} <img src="./assets/images/${ teamOne[0] }"`;

  };

  let messageTeamTwo = document.getElementById("messageTeamTwo");

  messageTeamTwo.innerHTML = `El segundo equipo es ${teamTwo}`;

  
};


console.log( teamOne );
console.log( teamTwo );