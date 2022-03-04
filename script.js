const player = {
  currentChoice: null
};
const computer = {
  currentChoice: null
};

function buttonClick(e) {
  // The computer will make a choice
  const choices = ["lapis", "papyrus", "scalpellus"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];

  //Convert id to index
  if (e.target.id === "lapis") {
    player.currentChoice = choices[0];
  } else if (e.target.id === "papyrus") {
    player.currentChoice = choices[1];
  } else {
    player.currentChoice = choices[2];
  }

  // Ties
  if (computer.currentChoice === player.currentChoice) {
    document.getElementById("results").innerText =
      "It looks like the player and the computer choose " + computer.currentChoice;
  }

  // If a tie has not been decided, the code will automatically determine the winner 
  else if (computer.currentChoice === choices[0]) {
    if (player.currentChoice === choices[1]) {
      document.getElementById("results").innerText =
        "The player won! Good job! The computer chose: " +
        computer.currentChoice +
        " and the player chose " +
        player.currentChoice;
    } else {
      document.getElementById("results").innerText =
        "Oh no, looks like the computer won! The computer chose " +
        computer.currentChoice +
        " and the player chose " +
        player.currentChoice;
    }
  } else if (computer.currentChoice === choices[1]) {
    if (player.currentChoice === choices[2]) {
      document.getElementById("results").innerText =
        "The player won! Great job! The computer chose " +
        computer.currentChoice +
        " and the player chose " +
        player.currentChoice;
    } else {
      document.getElementById("results").innerText =
        "Oh dear! The computer won! The computer chose " +
        computer.currentChoice +
        " and the player chose " +
        player.currentChoice;
    }
  } else if (computer.currentChoice === choices[2]) {
    document.getElementById("results").innerText =
      "Amazing! The player won! The computer chose " +
      computer.currentChoice +
      " and the player chose " +
      player.currentChoice;
  } else {
    document.getElementById("results").innerText =
      "Uh-oh, The computer won! The computer chose " +
      computer.currentChoice +
      " and the player chose " +
      player.currentChoice;
  }
}

//Click the event handlers

document.getElementById("lapis").addEventListener("click", buttonClick);
document.getElementById("papyrus").addEventListener("click", buttonClick);
document.getElementById("scalpellus").addEventListener("click", buttonClick);
