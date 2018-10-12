

// Initialize Variables
let wins = 0;
let losses = 0;
let totalScore = 0;
let randomNumber = 0;
let stone = [];



// Starts the game and randommizes the numbers
const gameStart = () => {
    stone = [];
    totalScore = 0;
    randomNumber = Math.floor(Math.random()*120)+12;
    document.querySelector("#randomnumber").innerHTML = randomNumber;

    // Randomly generates a number for a stone and pushes it if it doesnt exist in the array
    const generate = () => {
        let x = Math.floor(Math.random()*12)+1;
        stone.indexOf(x) >= 1 ? generate(0) : stone.push(x);
    }

    // Goes through each stone and runs the generate number
    for(let i = 0; i < 6; i++) {
        generate();
    }
}

// Check if the user score is above or equal to the target score
const test = () => {
    if (randomNumber < totalScore) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        alert("You are not worthy...");
        document.querySelector("#totalscore").innerHTML = 0;
        gameStart();
    }

    if (randomNumber === totalScore) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert("You are a god amongst us all");
        document.querySelector("#totalscore").innerHTML = 0;
        gameStart();
    }
}




// Initialize Game
gameStart();





// OnClick functions Functions

$(document).ready(function() {


    $("#stone1").on("click", function() {
        totalScore += stone[0];
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone2").on("click", function() {
        totalScore += stone[1];
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone3").on("click", function() {
        totalScore += stone[2];
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone4").on("click", function() {
        totalScore += stone[3];
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone5").on("click", function() {
        totalScore += stone[4];
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });

    $("#stone6").on("click", function() {
        totalScore += stone[5];
        document.querySelector("#totalscore").innerHTML = totalScore;
        test();
    });






});


