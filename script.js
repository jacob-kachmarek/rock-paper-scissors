

function compSelect() {
    var compChoice = ['R', 'P', 'S'];
    var randomChoice = Math.floor(Math.random() * compChoice.length);

    return compChoice[randomChoice];
}

var stats = {
wins: 0,
loses: 0,
ties: 0,
totalGames: 0,
};

function decideWinner(computer, user){

    if(user == computer){
        alert("It's a tie!");
        stats.ties++;
    } else if((user == "R" && computer == "S") || 
    (user == "P" && computer == "R") || 
    (user == "S" && computer == "P")){
        alert("You Win!");
        stats.wins++;
    } else {
        alert("You Lose");
        stats.loses++;
    }
    stats.totalGames++;

    alert(`Wins: ${stats.wins} \nLoses: ${stats.loses} \nTies: ${stats.ties}\nTotal Game Played: ${stats.totalGames}`);
    return;
}


function playGame(){
    var computerWork = compSelect();
    var userChoice = prompt("R, P, or S!");
    userChoice = userChoice.toUpperCase();
    console.log(computerWork);
    console.log(userChoice);
    decideWinner(computerWork, userChoice);  
    var replay = confirm("Do you wish to replay?");
    if(replay){
        playGame();
    }
}

    playGame();

    
    
