let playerScore = 0;
let computerScore = 0;

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

function playRound(){
console.log("You:" +playerScore +" Computer: " +computerScore);

hs = getHumanChoice()
cs = getComputerChoice()


if(hs === cs){
    console.log("Tie!")
    playRound();
}else if(hs === 0){
    if(cs===1){
        console.log("Computer chose Paper")
        console.log("Paper Beats Rock!")
        compWins();
    }else if(cs === 2){
        console.log("Computer chose Scissors")
        console.log("Rock beats Scissors!")
        humanWins();
    }

}else if(hs === 1){
    if(cs===0){
        console.log("Computer chose Rock")
        console.log("Paper Beats Rock!")
        humanWins();
    }else if(cs === 2){
        console.log("Computer chose Scissors")
        console.log("Scissors beats Paper!")
        compWins();
    }

}else if(hs === 2){
    if(cs===1){
        console.log("Computer chose Paper")
        console.log("Scissors beats Paper!")
        humanWins();
    }else if(cs === 0){
        console.log("Computer chose Rock")
        console.log("Rock beats Scissors!")
        compWins();
    }
}


}

function compWins(){
computerScore +=1
playRound()
}

function humanWins(){
playerScore+=1
playRound()
}

playRound();