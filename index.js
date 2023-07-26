var randomNumber1 = Math.random() * 6;
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage2);
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 wins";
} else {
  document.querySelector("h1").innerText = "Player 2 wins🚩";
}
