window.onload = function(){ 
  


var counter = [];
var wins = [];
var losses = [];
var numberChoices = [];
var computerGuess = Math.floor(Math.random()*(120-19+1)+19);
    console.log(computerGuess);
var randomCrystal1 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal2 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal3 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal4 = Math.floor(Math.random()*(12-1+1)+1);
console.log(randomCrystal1);
console.log(randomCrystal2);
console.log(randomCrystal3);
console.log(randomCrystal4);


var currentScore = [];

//making crystal1 clickable
document.getElementById("crystal1" ).onclick = function() {
    console.log("crystal one was clicked");
    currentScore = randomCrystal1;
}

//making crystal2 clickable
document.getElementById("crystal2" ).onclick = function() {
    console.log("crystal two was clicked");
}

//making crystal3 clickable
document.getElementById("crystal3" ).onclick = function() {
    console.log("crystal three was clicked");
}

//making crystal4 clickable
document.getElementById("crystal4" ).onclick = function() {
    console.log("crystal four was clicked");
}

var html =
                    "<p> Wins: " + wins + "</p>" +
                    "<p> Losses: " + losses + "</p>" +
                    "<p> Goal Score: " + computerGuess + "</p>" +
                    "<p> Current Value: " + currentScore + "</p>";

                document.querySelector("#game").innerHTML = html;
        

};