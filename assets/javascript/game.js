var wins = 0;
var losses = 0;
var sum = 0;
// variable goalScore - chooses a random number between 19 and 120. The randomCrystal variables all choose a random number between 1 and 19.
var goalScore = Math.floor(Math.random()*(120-19+1)+19);
var randomCrystal1 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal2 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal3 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal4 = Math.floor(Math.random()*(12-1+1)+1);


$("#wins").text("Wins = " + wins);
$("#losses").text("Losses = " + losses);
$("#goalScore").text("Goal Score = " + goalScore);
$("#sum").text("Current Value = " + sum);



$("#crystal1").on("click", function() { 
    console.log ("you clicked crystal1");
    console.log(sum);
    sum = sum + randomCrystal1;
    if (goalScore > sum) {
        $("#sum").text("Current Value = " + sum);
    }
    else {
        checkingforWin();
    }
});

$("#crystal2").on("click", function() { 
    console.log ("you clicked crystal2");
    sum = sum + randomCrystal2;
    if (goalScore > sum) {
        $("#sum").text("Current Value = " + sum);
    }
    else {
        checkingforWin();
    }
});

$("#crystal3").on("click", function () {
    console.log ("you clicked crystal3");
    sum = sum + randomCrystal3;
    if (goalScore > sum) {
        $("#sum").text("Current Value = " + sum);
    }
    else {
        checkingforWin();
    }
});

$("#crystal4").on("click", function() {
    console.log ("you clicked crystal4");
    sum = sum + randomCrystal4;
    if (goalScore > sum) {
        $("#sum").text("Current Value = " + sum);
    }
    else {
        checkingforWin();
    }
});


    
function checkingforWin () {
    if (goalScore === sum) {
        wins++;
        sum = 0;
        goalScore = Math.floor(Math.random()*(120-19+1)+19);
        randomCrystal1 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal2 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal3 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal4 = Math.floor(Math.random()*(12-1+1)+1);
        $("#wins").text("Wins = " + wins);
        $("#sum").text("Current Value = " + sum);
        $("#goalScore").text("Goal Score = " + goalScore);

        console.log ("Wins", wins);
        console.log("sum", sum);
        console.log("goalScore", goalScore);
    }
    if (goalScore < sum) {
        losses++;
        sum = 0;
        goalScore = Math.floor(Math.random()*(120-19+1)+19);
        randomCrystal1 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal2 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal3 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal4 = Math.floor(Math.random()*(12-1+1)+1);
        $("#losses").text("Losses = " + losses);
        $("#sum").text("Current Value = " + sum);
        $("#goalScore").text("Goal Score = " + goalScore);

        console.log ("Losses", losses);
        console.log("sum", sum);
        console.log("goalScore", goalScore);
    }
}


    console.log("THIS WORKS");





