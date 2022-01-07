const player = {
  currentChoice: null
};

const computer = {
  currentChoice: null
};
//function for when button is clicked
  //create variable for our choices
  //need to create random variable so computer can pick our function
  //assign random variable to computer choices
  //Convert the id in HTML to index (for the player choice)
  //create conditions for ties
  //create conditions for rest of results (computer/player wins/loses)
  //Event handlers for when button is clicked 
function buttonClicked(e) {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
if (e.target.id === "Rock") {
  player.currentChoice = choices[0]
} else if (e.target.id === "Paper") {
  player.currentChoice = choices[1] 
} else {
  (e.target.id === "Scissors")
  player.currentChoice = choices[2];
  }

if (computer.currentChoice === player.currentChoice) {
  document.getElementById("results").innerText = "It is a tie as both the player and computer selected " + computer.currentChoice
}

else if (computer.currentChoice === choices[0]) {
    if (player.currentChoice === choices[1]) {
  document.getElementById("results").innerText = "The player has won as they have selected " + player.currentChoice + " and the computer selected " + computer.currentChoice
    } else {
      document.getElementById("results").innerText = "The computer has won as they have selected " + computer.currentChoice + " and the player selected " + player.currentChoice
     }
  }
else if (computer.currentChoice === choices[1]) {
  if (player.currentChoice === choices[2]) {
    document.getElementById("results").innerText = "The player has won as they have selected " + player.currentChoice + " and the computer selected " + computer.currentChoice
  } else {
    document.getElementById("results").innerText = "The computer has won as they have selected " + computer.currentChoice + " and the player selected " + player.currentChoice
  }
}
else if (computer.currentChoice === choices[2]) {
  if (player.currentChoice === choices[0]) {
    document.getElementById("results").innerText = "The player has won as they have selected " + player.currentChoice + " and the computer selected " + computer.currentChoice
  } else {
    document.getElementById("results").innerText = "The computer has won as they have selected " + computer.currentChoice + " and the player selected " + player.currentChoice
      }
    }
}
document.getElementById("Rock").addEventListener("click", buttonClicked)
document.getElementById("Paper").addEventListener("click", buttonClicked)
document.getElementById("Scissors").addEventListener("click", buttonClicked)

