let card = [];
let sum = 0;
let hasblackjack = false;
let isalive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player={
 name:"Atif",
 chips:100 
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name+ ": $"+ player.chips; 

function start() {
  isalive = true; 
  let firstcard = randomcard();
  let secondcard = randomcard();
  card = [firstcard, secondcard]; 
  rendergame();
}

function randomcard() {
  let randomnumber = Math.floor(Math.random() * 13) + 1;
  if (randomnumber > 10) {
    return 10;
  } else if (randomnumber === 1) {
    return 11;
  } else {
    return randomnumber;
  }
}

function rendergame() {
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < card.length; i++) {
    cardsEl.textContent += card[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want a new card!";
  } else if (sum === 21) {
    message = "You got blackjack";
    hasblackjack = true;
  } else {
    message = "You are out of the game";
    isalive = false;
  }
  messageEl.textContent = message;
}

function newcard() {
  if (isalive === true && hasblackjack === false) {
    let newCard = randomcard();
    card.push(newCard);
    sum += newCard;
    rendergame();
  }
}
