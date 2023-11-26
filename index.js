const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const comp = document.querySelector(".computerChoice")
const winner = document.getElementById("winner")

let playerChoices = [rock,paper,scissors];
let computerChoices = [rock.innerText,paper.innerText,scissors.innerText]


playerChoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        choice.style.background = "lightskyblue"
        let p = player(choice.innerText);
        let c = computer();
    
        const label = document.createElement("h2");
        label.className = "compChoice"
        label.innerText = c;
        
        comp.appendChild(label);
    
        if(p === c){
            winner.innerText = "DRAW"
        }else if(p === "🪨" && c === "📃"){
            winner.innerText = "COMPUTER WIN"
        }else if(p === "📃" && c === "✂️"){
            winner.innerText = "COMPUTER WIN"
        }else if(p === "✂️" && c === "🪨"){
            winner.innerText = "COMPUTER WIN"
        }else{
            winner.innerText = "PLAYER WIN"
        }

        choice.parentElement.style.pointerEvents = "none"

        setTimeout(()=>{
            comp.removeChild(label);
            choice.style.background = "white";
            winner.innerText = ""
            choice.parentElement.style.pointerEvents = "all"
        },5000)
    })
})

function computer(){
    let computerChoice = ""
    computerChoice += computerChoices[Math.floor(Math.random()*computerChoices.length)]
    return computerChoice;
}

function player(choice){
    let playerChoice = ""
    playerChoice += choice;
    return playerChoice;
}

