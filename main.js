function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let winner;
    // look at selection of player and compare to selection of computer
    if(playerSelection === "rock" && computerSelection !== "paper"){
     winner = true;
    }
    else if(playerSelection === "paper" && computerSelection !== "scissor"){
        winner = true;
       }
    else if(playerSelection === "scissor" && computerSelection !== "rock"){
        winner = true;
       }

       
    return (winner ? 'player wins!':'computer wins!');
 }
// call this in the console to start playing
 function game(){
    let playerSelection;
    let computerSelection;
     for(let i = 0; i< 5; i++){
       computerSelection = computerChooses();
       console.log(computerSelection);
       playerSelection = prompt("Choose rock paper or scissor!");
       console.log(playerSelection);
       if(playerSelection === null){
           console.log("Du hast nichts eingeben",null)
       }else{
        console.log(playRound(playerSelection,computerSelection));
       }
     }
 }

 // a little helper function to let the computer choose which sign to play
 function computerChooses(){
    let selections = Array("rock","paper","scissor")
    return selections[Math.floor(Math.random() * selections.length)];
 }