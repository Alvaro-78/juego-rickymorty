
let selectCharacter = ( character ) => {
  
  if( teamOne.length < 3 ) {
    teamOne.push( character );
    document.getElementById( character ).className = "selectedOne";
    document.getElementById( character ).onclick = "";
          
  }else if( teamTwo.length < 3 ) {
    teamTwo.push( character );
    document.getElementById( character ).className = "selectedTwo" ;
    document.getElementById( character ).onclick = "";
  };
  
};


let teamOne = [];

let teamTwo = [];

