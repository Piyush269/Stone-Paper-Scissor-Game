let choices = document.querySelectorAll(".images");
let msg = document.querySelector("#win-msg")
let userCount = 0;
let compCount = 0;

const showWinner = (userWin,user,compChoose) => {
    if(userWin){
        msg.innerText = `you win because computer choose ${compChoose}`;
        userCount++;
        document.querySelector("#user-score").innerText = `${userCount}`;
        document.querySelector(".msg").style.backgroundColor = "green";
    }
    else{
        msg.innerText = `you lose because computer choose ${compChoose}`;
        compCount++;
        document.querySelector("#comp-score").innerText = `${compCount}`;
        document.querySelector(".msg").style.backgroundColor = "red";
    }
}

const playGame = (user) =>{
    let compChoose = compChoice();
    if(user === compChoose){
        msg.innerText = "Game was draw";
        document.querySelector(".msg").style.backgroundColor = "yellowgreen";
    }
    else{
        let userWin = true;
        if(user === "scissor"){
            userWin = compChoose === "rock"? false : true;
        }
        else if(user === "paper"){
            userWin = compChoose === "scissor"? false : true;
        }
        else if(user === "rock"){
            userWin = compChoose === "scissor"? true:false;
        }
        showWinner(userWin,user,compChoose);
    }
};
const compChoice = () =>{
    const choice = ["rock","paper","scissor"];
    randonIdx = Math.floor(Math.random()*3);
    return choice[randonIdx];
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        user = choice.getAttribute("id");
        playGame(user); 
    })    
});

