
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
	   computerChoice = "rock";
    } 
    else if(computerChoice <= 0.67) {
	computerChoice = "paper";
    } 
    else {
	computerChoice = "scissors";
    } 
    console.log("Computer: " + computerChoice);

    var compare = function(choice1, choice2) {
    if (choice1 === choice2){
        reGame = false;
        return "The result is a tie!";
        }
    else if (choice1 === "rock") {
        if (choice2 === "scissors"){
            return "rock wins - you win";
            }
        else {
            return "paper wins - you lose";
            }
        }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins - you win!";
            }
        else {
            return "scissors wins - you lose!";
            }
        }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors wins - you win!"
            }
        else {
            return "rock wins - you lose!";
            }
        }
    else return "bad input -- couldn't make a winner -- try again!";

    };

setTimeout(result2, 1000);
setTimeout(result3, 3000);
setTimeout(result, 4000);

function result(){
document.write(compare(userChoice, computerChoice));
};

function result2(){
document.write("You chose " + userChoice + "<br>");
};

function result3(){
document.write("The computer chose " + computerChoice + "<br>");
};
