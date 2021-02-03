let teamOne = [];

let teamTwo = [];



let selectCharacter = ( character ) => {
  
  if( teamOne.length < 3 ) {

    teamOne.push( character );

    document.getElementById( character ).className = "selectedOne";
    document.getElementById( character ).onclick = "";

    let picOne = document.getElementById( "playerOne" );
    picOne.innerHTML = `<div><img src="./assets/images/${ teamOne[0] }.jpg"></div>`;

    let picTwo = document.getElementById( "playerTwo" );
    picTwo.innerHTML = `<div><img src="./assets/images/${ teamOne[1] }.jpg"></div>`;

    let picThree = document.getElementById( "playerThree" );
    picThree.innerHTML = `<div><img src="./assets/images/${ teamOne[2] }.jpg"></div>`;

          
  }else if( teamTwo.length < 3 ) {

    teamTwo.push( character );

    document.getElementById( character ).className = "selectedTwo" ;
    document.getElementById( character ).onclick = "";
    
    let picFour = document.getElementById("playerFour");
    picFour.innerHTML = `<div><img src="./assets/images/${ teamTwo[0] }.jpg"</div>`;

    let picFive = document.getElementById("playerFive");
    picFive.innerHTML = `<div><img src="./assets/images/${ teamTwo[1] }.jpg"</div>`;

    let picSix = document.getElementById("playerSix");
    picSix.innerHTML = `<div><img src="./assets/images/${ teamTwo[2] }.jpg"</div>`;

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

  let showTeam1 = document.getElementById("teamBattle1");
  
  showTeam1.innerHTML = `<div><img src="./assets/images/${ teamOne[0] }.jpg"</div>`;
  showTeam1.innerHTML = `<div><img src="./assets/images/${ teamOne[1] }.jpg"</div>`;
  showTeam1.innerHTML = `<div><img src="./assets/images/${ teamOne[2] }.jpg"</div>`;
  
  let showTeam2 = document.getElementById("teamBattle2");

  showTeam2.innerHTML = `<div><img src="./assets/images/${ teamTwo[0] }.jpg"</div>`; 
  showTeam2.innerHTML = `<div><img src="./assets/images/${ teamTwo[1] }.jpg"</div>`; 
  showTeam2.innerHTML = `<div><img src="./assets/images/${ teamTwo[2] }.jpg"</div>`; 

};