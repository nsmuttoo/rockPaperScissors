let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let hs = 0

console.log("script")
const round = document.querySelector("#round")
const scoreing = document.querySelector("#score")
function getComputerChoice(){
    return Math.floor(Math.random()*3)
}

function getHumanChoice(){

    let input = prompt("Make your play - Rock - Paper - Scissors")
   
if(input.toLowerCase().charAt(0) === "r"){
    return 0
}else if(input.toLowerCase().charAt(0) === "p"){
    return 1
}else if(input.toLowerCase().charAt(0) === "s"){
    return 2
}else{ 
return null
}

}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) =>{

    button.addEventListener("click", () =>{
        console.log(button.id)

        alert(button.id)
    });
});

function turnOff(){
    window.confirm("Game Over!")
}

function alert(play){
    
    console.log(play)
    hs = play
    playRound()
}

function updateRound(text){
round.textContent = text

}

function updateScore(text){
scoreing.textContent = text
}


function playRound(){



cs = getComputerChoice()
console.log("PR:" + hs +"  ->" + cs)
updateScore("You:" +playerScore +" Computer: " +computerScore);

if(hs == cs){
    roundCount+=1;
    
    updateRound("Tie!")
    if (roundCount>4){
        gameOver();
        }
    
}else if(hs == 0){
    if(cs==1){
        updateRound("Computer chose Paper: Paper Beats Rock!")
        
        compWins();
    }else if(cs == 2){
        updateRound("Computer chose Scissors: Rock beats Scissors!")
        
        humanWins();
    }

}else if(hs == 1){
    if(cs==0){
        updateRound("Computer chose Rock: Paper Beats Rock!")
       
        humanWins();
    }else if(cs == 2){
        updateRound("Computer chose Scissors: Scissors beats Paper!")
        
        compWins();
    }

}else if(hs == 2){
    if(cs==1){
        updateRound("Computer chose Paper: Scissors beats Paper!")
        
        humanWins();
    }else if(cs == 0){
        updateRound("Computer chose Rock: Rock beats Scissors!")
        
        compWins();
    }
}
}
function gameOver(){
if(playerScore>computerScore){
    updateScore("You Win the game!  "+playerScore+" : " + computerScore)
}else if(computerScore>playerScore){
    updateScore("Computer Wins the game!  "+playerScore+" : " + computerScore )
}else{
    updateScore("Game ends in a Tie!  "+playerScore+" : " + computerScore)
}
    turnOff()

}

function compWins(){
computerScore +=1
roundCount+=1;
updateScore("You:" +playerScore +" Computer: " +computerScore);
if (roundCount>4){
    gameOver();
    }

}

function humanWins(){
playerScore+=1
roundCount+=1;
updateScore("You:" +playerScore +" Computer: " +computerScore);
if (roundCount>4){
    gameOver();
    }

}

