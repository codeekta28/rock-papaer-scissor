// There is no oop approach
console.log("This is index");
let html = ''
function rps(yourChoice) {
    let customerChoice = yourChoice.id;
    let computerChoice = botChoice();
    let result = gameCalculate(customerChoice, computerChoice);
    UI(customerChoice, computerChoice, result)
}
function botChoice() {
    let botChoiceArray = ["rock", "paper", "scissor"];
    let index = parseInt(Math.random() * botChoiceArray.length);
    return botChoiceArray[index]
}
function gameCalculate(yourChoice, botChoice) {
    console.log(yourChoice, botChoice);
    if (yourChoice === botChoice) {
        return "tie";
    } else if (yourChoice == "rock") {
        if (botChoice == "paper") {
            return "bot won"
        } else {
            return "you won"
        }
    } else if (yourChoice == "paper") {
        if (botChoice == "scissor") {
            return "bot won"
        } else {
            return "you won"
        }
    } else if (yourChoice == "scissor") {
        if (botChoice == "paper") {
            return "you won"
        } else {
            return "bot won"
        }
    }

}
function msgColor(result){
   let h1 = document.createElement("h1");
   h1.setAttribute('id','textColor');
   if(result=="tie"){
       h1.innerHTML = `Tie`
       h1.style.color = "yellow";
   }else if(result=="you won")
   {
       h1.style.color="green"
       h1.innerHTML = `You Won`
   }else{
    h1.style.color="red" 
    h1.innerHTML = "You Loose"
   }
   return h1;
}
function UI(yourChoice, botChoice, result) {
    let initialImageContainer = document.querySelector(".initialImgContainer");
     initialImageContainer.classList.add('hiddenItem');
     let h1Color = msgColor(result);
     let colorDiv = document.createElement("div");
     colorDiv.appendChild(h1Color);
    html = `<div class="d-flex justify-content-around my-5 align-items-center finalImgContainer">
    <img src="./img/${yourChoice}.jpg" class="customerChoiceImg" id="rock"  height="200" width="300" alt="" srcset="">           
    <img src="./img/${botChoice}.jpg" class="botChoiceImg" id="scissor" height="200" width="300" alt="" srcset=""> 
    </div>`
    let innerdiv = document.createElement('div');
    innerdiv.innerHTML = html;
    let container = document.querySelector(".mainBox");
    container.appendChild(innerdiv);
    container.appendChild(colorDiv);
    setTimeout(() => {
        container.removeChild(innerdiv);
        container.removeChild(colorDiv);
        initialImageContainer.classList.remove('hiddenItem');
    
    }, 3000);


}
