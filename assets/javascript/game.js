// this function somehow gets this whole thing working. Unsure why.
window.onload = function() {
  
// Declaring Variables
var wins = 0;
var losses = 0;

// the currentValue variable is the ARRAY that we add the crystal value to
var currentValue = [];

// sum variable is the SUM of the crystals
var sum = [];

// variable goalScore chooses a random number between 19 and 120. The randomCrystal variables all choose a random number between 1 and 19.
var goalScore = Math.floor(Math.random()*(120-19+1)+19);
var randomCrystal1 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal2 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal3 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal4 = Math.floor(Math.random()*(12-1+1)+1);


//This allows the Javascript to get input the values into the HTML
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("goalScore").innerHTML = goalScore;
document.getElementById("currentValue").innerHTML = currentValue;



if (goalScore == sum) {
    wins++;
}

if (sum > goalScore) {
    losses++;
    goalScore = Math.floor(Math.random()*(120-19+1)+19);
    currentValue = [];
}


//making crystal1 clickable
document.getElementById("crystal1" ).onclick = function() {
    console.log("crystal one was clicked");
    currentValue.push(randomCrystal1);
    sum = currentValue.reduce(add,0)
        function add(a,b) {
            return a + b;
        }
    document.getElementById("currentValue").innerHTML = sum;
}

//making crystal2 clickable
document.getElementById("crystal2" ).onclick = function() {
    console.log("crystal two was clicked");
    currentValue.push(randomCrystal2);
    sum = currentValue.reduce(add,0)
        function add(a,b) {
            return a + b;
        }
    document.getElementById("currentValue").innerHTML = sum;
}

//making crystal3 clickable
document.getElementById("crystal3" ).onclick = function() {
    console.log("crystal three was clicked");
    currentValue.push(randomCrystal3);
    sum = currentValue.reduce(add,0)
        function add(a,b) {
            return a + b;
        }
    document.getElementById("currentValue").innerHTML = sum;
}

//making crystal4 clickable
document.getElementById("crystal4" ).onclick = function() {
    console.log("crystal four was clicked");
    currentValue.push(randomCrystal4);
    sum = currentValue.reduce(add,0)
        function add(a,b) {
            return a + b;
        }
    document.getElementById("currentValue").innerHTML = sum;
}





};