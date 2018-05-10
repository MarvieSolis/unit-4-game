

// Initialize Variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = 0;
var stone1 = 0;
var stone2 = 0;
var stone3 = 0;
var stone4 = 0;
var stone5 = 0;
var stone6 = 0;


// Functions
function gameStart() {
    gameStatus = 0;
    totalScore = 0;
    randomNumber = Math.floor(Math.random()*120)+12;
    document.querySelector("#randomnumber").innerHTML = randomNumber;


    do{
    stone1 = Math.floor(Math.random()*12)+1;
    }
    while (stone1 === stone2 || stone1 === stone3 || stone1 === stone4 || stone1 === stone5 || stone1 === stone6);

    do{
        stone2 = Math.floor(Math.random()*12)+1;
    }
    while (stone2 === stone1 || stone2 === stone3 || stone2 === stone4 || stone2 === stone5 || stone2 === stone6);

    do{
        stone3 = Math.floor(Math.random()*12)+1;
    }
    while (stone3 === stone1 || stone3 === stone2 || stone3 === stone4 || stone3 === stone5 || stone3 === stone6);

    do{
        stone4 = Math.floor(Math.random()*12)+1;
    }
    while (stone4 === stone1 || stone4 === stone2 || stone4 === stone3 || stone4 === stone5 || stone4 === stone6);

    do{
        stone5 = Math.floor(Math.random()*12)+1;
    }
    while (stone5 === stone1 || stone5 === stone2 || stone5 === stone3 || stone5 === stone4 || stone5 === stone6);

    do{
        stone6 = Math.floor(Math.random()*12)+1;
    }
    while (stone6 === stone1 || stone6 === stone2 || stone6 === stone3 || stone6 === stone4 || stone6 === stone5);
}


function test() {
    if (randomNumber < totalScore) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        alert("You are not worthy...");
        gameStart();
    }

    if (randomNumber === totalScore) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert("You are a god amongst us all");
        gameStart();
    }
}




// Initialize Game
gameStart();





// OnClick functions Functions

$(document).ready(function() {


    $("#stone1").on("click", function() {
        totalScore += stone1;
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone2").on("click", function() {
        totalScore += stone2;
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone3").on("click", function() {
        totalScore += stone3;
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone4").on("click", function() {
        totalScore += stone4;
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone5").on("click", function() {
        totalScore += stone5;
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone6").on("click", function() {
        totalScore += stone6;
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });






});


