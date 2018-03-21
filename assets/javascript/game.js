var wins = 0;
var losses = 0;
var sum = 0;
// variable goalScore - chooses a random number between 19 and 120. The randomCrystal variables all choose a random number between 1 and 19.
var goalScore = Math.floor(Math.random()*(120-19+1)+19);
var randomCrystal1 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal2 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal3 = Math.floor(Math.random()*(12-1+1)+1);
var randomCrystal4 = Math.floor(Math.random()*(12-1+1)+1);


$("wins").html(wins);
$("losses").html(losses);
$("goalScore").html(goalScore);
$("currentValue").html(sum);


$("crystal1").on("click", sum1);
    if (goalScore > sum) {
        sum = sum + randomCrystal1;
    }
    else {
        checkingforWin();
    }

$("crystal2").on("click", sum2);
    if (goalScore > sum) {
        sum = sum + randomCrystal2;
    }
    else {
        checkingforWin();
    }
$("crystal3").on("click", sum3);
    if (goalScore > sum) {
        sum = sum + randomCrystal3;
    }
    else {
        checkingforWin();
    }
$("crystal4").on("click", sum4);
    if (goalScore > sum) {
        sum = sum + randomCrystal4;
    }
    else {
        checkingforWin();
    }

    console.log(sum1);

function sum1 () {
    sum = sum + randomCrystal1
    }
    
function sum2 () {
    sum = sum + randomCrystal2
    }

function sum3 () {
    sum = sum + randomCrystal3
    }

function sum4 () {
    sum = sum + randomCrystal4
    }


    
function checkingforWin () {
    if (goalScore == sum) {
        wins++;
        goalScore = Math.floor(Math.random()*(120-19+1)+19);
        randomCrystal1 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal2 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal3 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal4 = Math.floor(Math.random()*(12-1+1)+1);
    }
    if (goalScore < sum) {
        losses++;
        currentValue = [];
        goalScore = Math.floor(Math.random()*(120-19+1)+19);
        randomCrystal1 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal2 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal3 = Math.floor(Math.random()*(12-1+1)+1);
        randomCrystal4 = Math.floor(Math.random()*(12-1+1)+1);
    }
}

    console.log("THIS WORKS");





