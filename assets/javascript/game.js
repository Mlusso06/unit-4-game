$(document).ready(function() {

// This is to make sure the DOM is fully loaded before running
// List of Global Variables 
// randomNum math - a number between 120 and 19 = target for the user
var randomNum = Math.floor(Math.random() * (120 - 19 ) + 19);
// taget number for the user = the total by collecting gemstones
var targetNum = 0;
//wins and losses
var wins = 0;
var loss = 0;

// randome numbers for each of my gemstones (1 through 12)
var blueD = Math.floor(Math.random() * (12 -1) + 1);
var redG = Math.floor(Math.random() * (12 -1) + 1);
var greenG = Math.floor(Math.random() * (12 -1) + 1);
var crazyOp = Math.floor(Math.random() * (12 -1) + 1);


///
//Main game's functions
//    * There will be four crystals displayed as buttons on the page.
    // complete
    window.onload = function () {
        $("#blueD").on("click", blueD);
        $("#redG").on("click", redG);
        $("#greenG").on("click", greenG);
        $("#crazyOp").on("click", crazyOp);
      };
    
//    * The player will be shown a random number at the start of the game.
$("#secretScore").text(randomNum);


//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
$("#userTotal").text(targetNum);


//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// * The random number shown at the start of the game should be between 19 - 120.
console.log(randomNum)
// * Each crystal should have a random hidden value between 1 - 12.
console.log(blueD)
console.log(redG)
console.log(greenG)
console.log(crazyOp)


});
