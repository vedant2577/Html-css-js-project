
let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#computer-score");

const genComputerChoice = () =>{
const options =["rock","paper","scissor"];
const randomidx = Math.floor(Math.random()*3);
return options[randomidx];
};

const drawGame = () =>{
    console.log("Game is draw");
    msg.innerText="Game is draw Play Again";
}

const showWinner = (userWin) =>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You wins");
        msg.innerText="You wins";
        msg.style.backgroundColor ="green";
    }else{
        computerscore++;
        compscorepara.innerText=computerscore;
        console.log("You lose");
        msg.innerText="You lose";
         msg.style.backgroundColor ="red";
    }
}

const playgame = (Userchoice) =>{
console.log("user choice=",Userchoice);

// Generate computer choice
const compChoice = genComputerChoice();
console.log("Comp choice=",compChoice);

if(Userchoice===compChoice){
    // Draw game
drawGame();
}else{
    let userWin = true;
    if(Userchoice === "rock"){
        // scissor,paper
        userWin=compChoice === "paper" ? false : true;
    }else if(Userchoice === "paper"){
        //scissor,rock
       userWin= compChoice === "scissor" ? false : true;
    }else if(Userchoice === "scissor"){
        // rock, paper
        userWin=compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
}
};

choices.forEach((choice) =>{
    
    choice.addEventListener("click", () => {
        const Userchoice=choice.getAttribute("id");
        playgame(Userchoice);

    });
});
